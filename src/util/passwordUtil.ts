import bcrypt from 'bcrypt';
export const hashPassword = async (password : string) =>{
    try {
        const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUND ?? ''));
        const hash = await bcrypt.hash(password, salt);
        return hash;
      } catch (error) {
        console.error('Error hashing data:', error);
        throw error;
      }
}