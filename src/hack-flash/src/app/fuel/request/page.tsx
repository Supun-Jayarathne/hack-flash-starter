"use client";

import { FuelRequest } from "@/domain/FuelRequest";
import { FuelRequestResponse } from "@/domain/FuelRequestResponse";
import { FormEvent } from "react";
import styles from "./page.module.css";

const submitRequest = async (
  fuelRequest: FuelRequest
): Promise<{ fuelResponse: FuelRequestResponse }> => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const respone = await fetch(`${baseUrl}/api/fuel/request`, {
    method: "POST",
    body: JSON.stringify(fuelRequest),
  });
  console.log("respone",respone);
  
  return respone.json();
};

export default function Home() {
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      licensePlate: { value: string };
      amount: { value: number };
      date: { value: string };
    };
    const fuelRequest: FuelRequest = {
      licensePlate: target.licensePlate.value,
      amount: target.amount.value,
      date: new Date(),
    };
    // console.log("fuelRequest",fuelRequest);

    const resp = await submitRequest(fuelRequest);
    console.log("resp",resp);
    
    // if (resp) {
    //   router.push("/vehicle/register/success");
    // } else {
    //   router.push("/vehicle/register/error");
    // }
  };

  return (
    <main className={styles.main}>
      <div className={styles.clHeader}>Bistec Fuel Pass</div>
      <div className={styles.clWrapper}>
      
      <form onSubmit={handleSubmit} action="/api/fuel/request">
        <div>
          <div className={styles.clLabel}>Licence Plate :</div>
          <div>
            <input
              id="licensePlate"
              name="licensePlate"
              className={styles.clTextBox}
            ></input>
          </div>
          <div className={styles.clLabel}>Amount :</div>
          <div>
            <input
              id="amount"
              name="amount"
              className={styles.clTextBox}
            ></input>
          </div>
        </div>
        <div>
          <button id="submit" type="submit" className={styles.clButton}>
            Submit
          </button>
        </div>
      </form>
      </div>
    </main>
  );
}
