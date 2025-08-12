const maxLength = 25

// Function that truncates a string if it exceeds the specified maximum length. - used for Hostnames
export const truncateString = (str: string): string => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};
