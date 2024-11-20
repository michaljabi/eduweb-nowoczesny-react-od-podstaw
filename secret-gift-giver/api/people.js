import {nanoid} from "nanoid";


const people = [
    {
        "name": "Eva",
        "id": "c86d"
    },
    {
        "name": "Mark",
        "id": "84ed"
    },
]


export function GET() {
    return new Response(JSON.stringify(people))
}

export async function POST(request) {
     const body = await request.json();
     people.push({id: nanoid(), ...body})
     return new Response(JSON.stringify(body))
}
