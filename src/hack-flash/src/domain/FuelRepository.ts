import { addFuelRecord, deleteAllVehicles, findUsedFuel, findVehicle, registerVehicle } from "./FirebaseApp";
import { FuelRequest } from "./FuelRequest";
import { FuelRequestResponse } from "./FuelRequestResponse";
import { VehicleRepository } from "./VehicleRepository";

export class FuelRepository {
    // async insert(fuelRecord: FuelRequest): Promise<FuelRequestResponse | string> {
        async insert(fuelRecord: FuelRequest): Promise<any> {
        if (await this.isQuantityAvailable(fuelRecord.licensePlate)) {
            const fuelResponse = await addFuelRecord(fuelRecord);
          return fuelResponse;
        } else {
           
          return 'Your weekly quota is over,please wait for next week';
        }
    }

    async isQuantityAvailable(licensePlate: string):  Promise<any> {
        const oldFuelRecords = await findUsedFuel(licensePlate);
        console.log("oldFuelRecords",oldFuelRecords);
        const totalUsed = 5; //calculate and find

        const vehicleRepo = new VehicleRepository();
        const vehicleType = await vehicleRepo.getVehicleType(licensePlate);
        const response = {
            used:0,
            remaining:0
        }
        //type the logic to find the remaining quantity
        switch (vehicleType) {
            case 'CAR':
                // response.remaining = vehicleRepo.vehicleTypes[0].quota-totalUsed
                break;
            case 'BUS':
                
                break; 
            case 'LORRY':
                
                break;  
            case 'BIKE':
                
                break;  
            case 'THREE WHEEL':
                
                break;     
        
            default:
                break;
        }
        
        // if (oldFuelRecords) {
        //   return true
        // }
        return true;
      }
}