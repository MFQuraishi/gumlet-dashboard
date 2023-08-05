import React from "react";
import Text from "./darkSupportedFont";
import { TopAssetModel } from "@/app/api/adhocData/allDataModels";

export default function TopAssets({ topAssetsData }: { topAssetsData: TopAssetModel[] }) {
  return (
    <div className="">
      <TopAssetsScaffold
        isHeading
        component1={<Text className="font-bold">ASSET ID</Text>}
        component2={<Text className="font-bold">COLLECTION NAME</Text>}
        component3={<Text className="font-bold">STREAM DURATION</Text>}
      />
      {topAssetsData.map((ele, idx) => {
        return (
          <TopAssetsScaffold
            key={idx}
            component1={
              <Text isSecondary className="underline text-sm">
                {ele.asset_id}
              </Text>
            }
            component2={
              <div className="bg-purple-accent bg-opacity-20 inline-block px-2 py-[1px] rounded-md">
                <Text className="text-sm !text-purple-accent font-bold">demo</Text>
              </div>
            }
            component3={<Text isSecondary>{ele.units}</Text>}
          />
        );
      })}
    </div>
  );
}

function TopAssetsScaffold({
  component1,
  component2,
  component3,
  isHeading,
}: {
  component1: React.ReactNode;
  component2: React.ReactNode;
  component3: React.ReactNode;
  isHeading?: boolean;
}) {
  return (
    <div
      className={`items-center flex border-b dark:border-b-gray-800 border-b-gray-600 py-3 flex-row ${
        isHeading ? "bg-l-default dark:bg-d-default" : ""
      }`}
    >
      <div className="w-[40%] truncate px-3">{component1}</div>
      <div className="w-[30%] break-words px-3">{component2}</div>
      <div className="w-[30%]  px-3">{component3}</div>
    </div>
  );
}
