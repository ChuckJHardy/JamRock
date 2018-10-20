export const VISITOR = 'VISITOR'
export const USER = 'USER'
export const OWNER = 'OWNER'
export const roles = [
    VISITOR,
    USER,
    OWNER
]

export function current(index: string): string {
    return roles[index] || VISITOR
}

type Role = 'VISITOR' | 'USER' | 'OWNER'

export function isVisitor(other: Role): boolean {
    return isOther(VISITOR, other)
}

export function isUser(other: Role): boolean {
    return isOther(USER, other)
}

export function isOwner(other: Role): boolean {
    return isOther(OWNER, other)
}

function isOther(expected: Role, other: Role): boolean {
    return expected === other
}