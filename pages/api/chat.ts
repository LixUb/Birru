// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  ok: boolean;
  data?: any;
  error?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ ok: false, error: 'Method Not Allowed' });
  }

  try {
    const { userMessage } = req.body;
    if (!userMessage || typeof userMessage !== 'string') {
      return res.status(400).json({ ok: false, error: 'Missing userMessage in body' });
    }

    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      return res.status(500).json({ ok: false, error: 'GEMINI_API_KEY not configured on server' });
    }

    // Bangun prompt/system instruction di server agar klien tidak perlu menyimpan prompt/policy
    const systemPrompt = `Kamu adalah asisten AI bernama "Birru Assistant" yang membantu pengguna memahami ZISWAF (Zakat, Infak, Sedekah, dan Wakaf) dalam Islam.

Konteks: Kamu berada di platform edukasi ZISWAF bernama Birru yang menyediakan:
- Kalkulator Zakat (Fitrah, Mal, Profesi, Perdagangan)
- Program Infak untuk bantuan sembako
- Program Wakaf untuk pembangunan masjid dan fasilitas pendidikan
- Materi edukasi lengkap dengan dalil Al-Quran dan Hadits

Tugas kamu:
1. Jawab pertanyaan seputar ZISWAF dengan bahasa yang ramah, mudah dipahami, dan sesuai syariat Islam
2. Sertakan dalil Al-Quran atau Hadits jika relevan (dalam bahasa Arab dan terjemahan)
3. Berikan contoh praktis dan aplikatif
4. Arahkan pengguna ke fitur yang relevan di platform Birru jika diperlukan
5. Gunakan emoji secukupnya untuk membuat percakapan lebih hangat

Gaya komunikasi:
- Sapa dengan "Assalamu'alaikum" atau variasi yang sesuai
- Gunakan bahasa Indonesia yang sopan dan mudah dipahami
- Hindari istilah teknis yang terlalu rumit
- Berikan motivasi untuk beramal

Pertanyaan pengguna:`;

    // Request body sesuai contoh payload yang dipakai di file asal.
    const apiBody = {
      // struktur ini mirip payload "generateContent" — sesuaikan bila Google API berubah
      contents: [
        {
          parts: [
            {
              text: `${systemPrompt} ${userMessage}`
            }
          ]
        }
      ],
      // generationConfig bisa disesuaikan
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024
      }
    };

   const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

    const r = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // Jika server butuh Authorization header (Bearer), ubah sesuai dokumentasi:
        // 'Authorization': `Bearer ${GEMINI_API_KEY}`,
      },
      body: JSON.stringify(apiBody)
    });

    if (!r.ok) {
      const text = await r.text();
      console.error('Gemini API error:', r.status, text);
      return res.status(502).json({ ok: false, error: `Upstream error ${r.status}: ${text}` });
    }

    const data = await r.json();

    // Ambil teks jawaban dari response (disesuaikan struktur respons)
    const aiResponse =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      data?.output ?? // fallback
      null;

    return res.status(200).json({ ok: true, data: { raw: data, text: aiResponse } });
  } catch (err: any) {
    console.error('API handler error:', err);
    return res.status(500).json({ ok: false, error: err.message || 'Internal Server Error' });
  }
}
