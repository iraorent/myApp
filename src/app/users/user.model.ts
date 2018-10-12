export interface User {
    id: string;
    name: string,    
    password: string,
    oldPassword: [{
            password: string
        }],
    forcePasswordChange: boolean,    
    role: [{
            ref: string,
            name: string,
            isActive:boolean
        }],
    company: [{
        ref: string,
        isActive: boolean,
        department: [
            {
                ref: string,
                isActive: boolean
            }
        ]
    }],
    emp: [{
            ref: string,
            number: string,
            isActive:boolean
    }],
    email: string,
    remarks: string,
    attachment: {
        ref: string,
        fileName: boolean
    },
    invalidAttemptCount: {
        type: number, 
        default: 0
    },
    isLocked:boolean,   
    lastLogin: Date,
    lastLocked: Date,
    lastPasswordChanged: Date,
    source: string,
    permissions:string,
    isActive: boolean,
    createdDate: Date,
    createdBy: string,
    updatedDate: Date,
    updatedBy: string
}
