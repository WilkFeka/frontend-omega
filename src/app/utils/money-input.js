export function formatMoneyInput(value) {
    const text = String(value ?? '');
    if (!text)
        return '';
    const [integerPart, decimalPart] = text.split('.');
    const grouped = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return decimalPart === undefined ? grouped : `${grouped}.${decimalPart}`;
}
export function normalizeMoneyInput(displayValue) {
    const normalized = displayValue.replace(/,/g, '');
    return /^\d*(?:\.\d{0,2})?$/.test(normalized) ? normalized : null;
}
