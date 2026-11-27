
export function capitalizeFirst (str: string) {
    if(!str) return str
    return str[0].toUpperCase() + str.slice(1);
}

export function formatGameTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}