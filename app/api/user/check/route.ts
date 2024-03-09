import pool, { checkUser } from "@/db/db"


const POST = async (request: Request) => {
    const { username, password } = await request.json()

    if (!username || !password) {
        return Response.json({ error: "Username and password are required" }, { status: 400 })
    }

    try {

        const success = await checkUser(pool, username, password)

        if (!success) {
            return Response.json({ error: "Error checking user" }, { status: 500 })
        }

        return Response.json({ message: "User exists" }, { status: 201 })

    } catch (error) {
        console.error("Error checking user: ", error)
        return Response.json({ error: "Error checking user" }, { status: 500 })
    }
}

export { POST }
