import { formatRPM as brokenFormatRPM } from "./rpmGaugeBug";
import { formatRPM as fixedFormatRPM } from "./rpmGaugeFixed";

const testValues = [0, 1000, 2000, 3000, 4500];

console.log("BEFORE FIX:");
testValues.forEach((rpm) => {
    console.log(`${rpm} RPM displays as ${brokenFormatRPM(rpm)}`);
});

console.log("\nAFTER FIX:");
testValues.forEach((rpm) => {
    console.log(`${rpm} RPM displays as ${fixedFormatRPM(rpm)}`);
});