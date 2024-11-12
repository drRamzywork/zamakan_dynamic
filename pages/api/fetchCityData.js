export default async function handler(req, res) {
  const { placeId } = req.query;
  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  try {
    const resCityData = await fetch(
      `${apiDomain}/api/Makan/GetMakanFullData?makan=${placeId}&lang=2`
    );
    const dataCityData = await resCityData.json();

    const resCityPoetry = await fetch(
      `${apiDomain}/api/Poetries/GetAllPoetries?place=${placeId}&type=6&lang=2&pagenum=1&pagesize=50`
    );
    const dataCityPoetry = await resCityPoetry.json();

    res
      .status(200)
      .json({ cityData: dataCityData, poetryData: dataCityPoetry });
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ error: "Error fetching data" });
  }
}
