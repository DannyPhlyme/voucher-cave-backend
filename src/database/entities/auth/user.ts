import { Entity, Column, OneToMany } from 'typeorm';
import { LoginHistory } from './login-history';
import { Status, Country } from '../enum';
import { Password } from './password';
import { Token } from './token';
import { ActivityLog } from './activity-logs';
import { BaseEntity } from '../base';

/**
 * @todo See if I can simplify all relationships for the USER entity
 */
@Entity({
  name: 'users',
})
export class User extends BaseEntity {
  @OneToMany(() => LoginHistory, (history) => history.user, {
    cascade: ['insert'],
  })
  histories: LoginHistory[];

  @OneToMany(() => Password, (password) => password.user)
  passwords: Password[];

  @OneToMany(() => Token, (token) => token.user)
  tokens: Token[];

  @OneToMany(() => ActivityLog, (activity) => activity.user)
  activities: ActivityLog[];

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  phone: string;

  @Column({
    type: 'enum',
    enum: Country,
    nullable: true,
  })
  country: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  username: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.INACTIVE,
  })
  status: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  email_verified: boolean;
}
