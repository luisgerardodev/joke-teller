// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const VOICERSS_API_KEY = process.env.VOICERSS_API_KEY;
    return {
      statusCode: 200,
      body: JSON.stringify({ apiKey: VOICERSS_API_KEY }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
