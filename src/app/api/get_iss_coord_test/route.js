import {NextResponse, NextRequest} from 'next/server';

export async function GET(request){
    let res = await (await fetch("http://api.open-notify.org/iss-now.json")).json();
    let lat = res["iss_position"]["latitude"];
    let lon = res["iss_position"]["longitude"];

    return NextResponse.json(
        {
            "iss_latitude":lat,
            "longitude":lon
        }
    );
}