import { FuelRepository } from "@/domain/FuelRepository";
import { FuelRequest } from "@/domain/FuelRequest";

export async function POST(request: Request) {
  
    const data: FuelRequest = await request.json();
    const fuelRepo = new FuelRepository();
    const fuelResponse = await fuelRepo.insert(data);

  return new Response(JSON.stringify({
    fuelResponse
  }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
}
