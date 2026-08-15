import {NextResponse, NextRequest} from 'next/server';

export async function GET(request, {params}){
    const {city} = await params;
    let res = await fetch(
        `https://nominatim.openstreetmap.org/search?city=${city}&format=json`,
        {
            headers:{
                'User-Agent':'ISSWaltz/1.0 sheikhzubairahmed3949@gmail.com'
            }
        }
    );
    let data = await (res).json();

    if(data.length == 0){
        return NextResponse.json(
            {
                "error":"City not found 😞"
            }
        ), {status: 404};
    }

    if(!data){
        return NextResponse.json(
            {
                "error":"City not found 😞"
            }
        ), {status: 404};
    }
    
    const {lat, lon, display_name} = data[0];

    return NextResponse.json(
        {
            "display_name":display_name,
            "lat":lat,
            "lon":lon,
            "message":"success"
        }
    );
}