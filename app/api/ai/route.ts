import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'success', 
    message: 'API Ndao Hianatra Langue dia mandeha tsara' 
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ 
      status: 'success', 
      receivedData: body 
    });
  } catch (error) {
    return NextResponse.json({ 
      status: 'error', 
      message: 'Invalid JSON' 
    }, { status: 400 });
  }
}
