import pool, { createUser } from "@/db/db"


const POST = async (request: Request) => {
    const { username, password } = await request.json()

    if (!username || !password) {
        return Response.json({ error: "Username and password are required" }, { status: 400 })
    }

    try {

        const success = await createUser(pool, username, password)

        if (!success) {
            return Response.json({ error: "Error creating user" }, { status: 500 })
        }

        return Response.json({ message: "User created successfully" }, { status: 201 })


    } catch (error) {
        console.error("Error creating user: ", error)
        return Response.json({ error: "Error creating user" }, { status: 500 })
    }
}

export { POST }
