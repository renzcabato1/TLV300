export type DomainType = string

export type DomainInformationType = {
    domainName: string,
    registrar: string,
    registrationDate: string,
    expirationDate: string,
    estimatedDomainAge: number,
    hostnames: string,
}

export type ContactInformationType = {
    registrantName: string,
    technicalContactName: string,
    administrativeContactName: string,
    contactEmail: string
}