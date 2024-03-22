

export const formatDate = (ISOStringDate: any) => 
    new Date(ISOStringDate).toLocaleDateString('en-GB')
