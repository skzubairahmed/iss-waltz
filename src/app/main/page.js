"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";

export default function Home(){
    let [issPosition, setIssPosition] = useState([0, 0]);
    let [loading, setLoading] = useState(true);
    let [altitude, setAltitude] = useState(0);

    const LiveMap = useMemo(() => dynamic(
        () => import("@/app/components/LiveMap"),
        {
            loading: () => <p className="text-[#06B6D4] font-mono">ORBITAL RADAR LOADING...📡</p>,
            ssr: false
        }
    ), []);

    useEffect(() => {
        async function fetchISS(){
            try {
                let res = await fetch("/main/api/map");
                let data = await res.json();
                console.log(data);
                if(data.latitude && data.longitude && data.altitude){
                    setIssPosition([data.latitude, data.longitude]);
                    setAltitude(data.altitude)
                    setLoading(false);
                }
            } catch (err) {
                console.error("Telemetry fetch failed:", err);
            }
        }

        fetchISS();

        let iss_pos_fetch_interval = setInterval(fetchISS, 5000);
        return () => clearInterval(iss_pos_fetch_interval);
    }, []);

    return(
        <>
          <div className="w-screen h-screen flex flex-row">
             <div className="w-full h-full flex flex-col p-6 bg-[#030712] text-[#F3F4F6]">
              <div className="flex justify-between items-center mb-4 flex-wrap">
                <h1 className="text-xl sm:text-md font-mono tracking-widest text-[#06B6D4]">
                  [ LIVE_ISS_TELEMETRY ]
                </h1>
                <h1 className="text-md sm:text-md font-mono tracking-widest text-[#06B6D4]">
                  [ ALTITUDE: {altitude}km ]
                </h1>
                <div className="font-mono text-sm text-[#06B6D4]/80 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] animate-ping" />
                  SYNCING_EVERY_5S
                </div>
              </div>
              
              <div className="w-full flex-1 border border-[#06B6D4]/40 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                {!loading ? (
                  <LiveMap issPosition={issPosition} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono text-[#06B6D4]">
                    ACQUIRING_SATELLITE_LOCK...
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
    );
}