import { AppDataSource } from '../config/database';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { hashPassword } from '../utils/authUtils';
import { User } from '../models/user';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const userService = {

    register: async (email: string, password: string, fullName: string) => {
        try{
            const userRepository = AppDataSource.getRepository(User);

            const hashedPassword = await hashPassword(password);
    
            const newUser = new User();
            newUser.email = email;
            newUser.password = hashedPassword;
            newUser.fullName = fullName;
    
            await userRepository.save(newUser);
            return newUser;
        } catch(error) {
                 console.log(error)
        }


    },

    login: async (email: string, password: string) => {
        // Get the user from the database
        const userRepository = AppDataSource.getRepository(User);
        const user = await userRepository.findOneBy({ email });

        if (!user) {
            throw new Error('Invalid email or password');
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
            expiresIn: '1h',
        });

        return token;
    }
};

