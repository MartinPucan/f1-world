const getDriverNames = async (wordType: string) =>
    await (
        await fetch(
            (process.env.NODE_ENV === "production" ?
                    "https://ergast.com/api/f1/2021/drivers" : "<http://localhost:3000/db/>") + wordType
        )
    ).text();