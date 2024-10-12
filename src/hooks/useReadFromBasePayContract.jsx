"use client";
import { useState, useEffect } from "react";
import { useAccount, useReadContract } from "wagmi";
import { BasedPayAbi, BasedPayAddress } from "@/constants/constants";

export default async function useReadFromBasePayContract({
  funcName,
  paraArr,
}) {
  console.log(funcName)
  console.log(paraArr)
  const {
    data: resData,
    isError: resError,
    isLoading: resLoading,
  } =  useReadContract({
    abi: BasedPayAbi,
    address: BasedPayAddress,
    functionName: funcName,
    args: paraArr,
  });
  console.log("data res",resData)
  return { resData, resError, resLoading };
}
