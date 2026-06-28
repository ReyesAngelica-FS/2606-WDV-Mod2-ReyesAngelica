// Original Bug
// RPM should display 0, 1000, 2000, 3000
// Instead it displays 0, 1, 2, 3

export function formatRPM(rpm: number): string {
    return (rpm / 1000).toFixed(0);
}