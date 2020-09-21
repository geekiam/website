export default class {
    static toTitleCase(str) {
        return str
            .replace('-', ' ')
            .split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ')
    }
}
