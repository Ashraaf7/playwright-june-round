try {
    // Code that may throw an exception
    throw new Error("An error occurred");
}
catch (error: Error | any) {
    // Handle the exception
    if (error instanceof Error) {
        console.error("Caught an error:", error.message);
    }
}


console.log("This will still execute even if an error was caught.");

