import Chance from "chance";

const chance = Chance();

export const fakeUserData = () => {
    // console.log()
    return chance.name({middle: true})
}