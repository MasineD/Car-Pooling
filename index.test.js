import { describe, it, expect } from "vitest";
import { carPooling } from "./index.js";

describe("carPooling", () => {
    it("should return false for trips.length less than 1", () => {
        const trips = [];
        const capacity = 4;
        expect(carPooling(trips, capacity)).toBe(false);
    });
    it("should return false for trips.length greater than 1000", () => {
        const trips = new Array(1001).fill([2, 1, 5]);
        const capacity = 4;
        expect(carPooling(trips, capacity)).toBe(false);
    });
    it("should return false for trips with element length not equal to 3", () => {
        const trips = [[2, 1], [2, 3, 7]];
        const capacity = 4;
        expect(carPooling(trips, capacity)).toBe(false);
    });
    it("should return false for trips with number of passengers less than 1", () => {
        const trips = [[0, 1, 5], [2, 3, 7]];
        const capacity = 4;
        expect(carPooling(trips, capacity)).toBe(false);
    });
    it("should return false for trips with number of passengers greater than 100", () => {
        const trips = [[101, 1, 5], [2, 3, 7]];
        const capacity = 103;
        expect(carPooling(trips, capacity)).toBe(false);
    });
    it("should return false for trips with from location greater than to location", () => {
        const trips = [[2, 5, 1], [2, 3, 7]];
        const capacity = 4;
        expect(carPooling(trips, capacity)).toBe(false);
    });
    it("should return false for trips with to location greater than 1000", () => {
        const trips = [[2, 1, 1001], [2, 3, 7]];
        const capacity = 4;
        expect(carPooling(trips, capacity)).toBe(false);
    });
    it("should return false for capacity less than 1", () => {
        const trips = [[2, 1, 5], [2, 3, 7]];
        const capacity = 0;
        expect(carPooling(trips, capacity)).toBe(false);
    });
    it("should return false for capacity greater than 10^5", () => {
        const trips = [[2, 1, 5], [2, 3, 7]];
        const capacity = 10**5 + 1;
        expect(carPooling(trips, capacity)).toBe(false);
    });
    it("should return true for valid trips and capacity", () => {
        const trips = [[2, 1, 5], [2, 3, 7]];
        const capacity = 4;
        expect(carPooling(trips, capacity)).toBe(true);
    });

    it("should return false for invalid trips or capacity", () => {
        const trips = [[2, 1, 5], [3, 3, 7]];
        const capacity = 3;
        expect(carPooling(trips, capacity)).toBe(false);
    });
});