import {
    Entity,
    Column,
    BeforeInsert,
    Generated,
    PrimaryColumn,
  } from 'typeorm';
  
  @Entity("admin")
  export class AdminEntity {
    @Generated() 
    @PrimaryColumn()
    id: number;
  
    
    @Column({ length: 100, unique: true })
    username: string;
  
    @Column({ length: 150 })
    fullname: string;
  
    @Column({ default: false })
    isActive: boolean;
  
    @BeforeInsert()
    generateId() {
        this.id = Math.floor (Math.random () * 1000);
    }
  }