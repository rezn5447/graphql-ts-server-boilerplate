import { Entity, PrimaryColumn, Column, BeforeInsert } from 'typeorm';
import * as uuidv4 from 'uuid/v4';

@Entity()
export class User {
	@PrimaryColumn('uuid') id: string;

	@Column('varchar', { length: 255 })
	email: string;

	@Column('varchar', { length: 255 })
	password: string;

	@BeforeInsert()
	addId() {
		this.id = uuidv4();
	}
}
