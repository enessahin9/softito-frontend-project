// Login verileri bir DTO'dur. Veritabanında bir veriye denk gelmediği için.
// Login bir tip ve büyük harfle başlar.

export interface LoginDto {
    userName: string;
    password: string;
} 