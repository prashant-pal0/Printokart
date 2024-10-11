import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number; // Use definite assignment assertion

    @Column({ unique: true })
    email!: string; // Add `!` to ensure this will be initialized

    @Column()
    password!: string; // Add `!` to ensure this will be initialized

    @Column({ nullable: true })
    fullName?: string; // Optional property

    @CreateDateColumn()
    createdAt!: Date; // Use `!` for the createdAt field
}
