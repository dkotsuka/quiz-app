import { capitalize, shuffleArray, decodeHTMLEntities } from "."

test("Shuffle Array", () => {
    const shuffledNumbers = shuffleArray([0,1,2,3,4,5,6,7])
    expect(shuffledNumbers.toString()).not.toBe([0,1,2,3,4,5,6,7].toString())

    const shuffledStrings = shuffleArray(["a", "b", "c", "d", "e", "f", "g", "h"])
    expect(shuffledStrings.toString()).not.toBe(["a", "b", "c", "d", "e", "f", "g", "h"].toString())
})

test("Capitalize", () => {
    const text = "example text"
    expect(capitalize(text)).toBe("Example text")

    const text2 = "Example text"
    expect(capitalize(text2)).toBe("Example text")
})

test("HTML decoder", () => {
    const text = "Foo &#xA9; bar &#x1D306; baz &#x2603; qux"
    expect(decodeHTMLEntities(text)).toBe("Foo © bar 𝌆 baz ☃ qux")
})