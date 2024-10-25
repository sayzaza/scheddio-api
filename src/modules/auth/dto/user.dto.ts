import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'UUID' })
  id: string;

  @ApiProperty({ example: 'UUID', nullable: true })
  instanceId: string;

  @ApiProperty({ example: 'audience_string', nullable: true })
  aud: string;

  @ApiProperty({ example: 'user_role', nullable: true })
  role: string;

  @ApiProperty({ example: 'user@example.com', nullable: true })
  email: string;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  emailConfirmedAt: Date;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  invitedAt: Date;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  confirmationSentAt: Date;

  @ApiProperty({ example: 'recovery_token', nullable: true })
  recoveryToken: string;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  recoverySentAt: Date;

  @ApiProperty({ example: 'email_change_token_new', nullable: true })
  emailChangeTokenNew: string;

  @ApiProperty({ example: 'email_change', nullable: true })
  emailChange: string;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  emailChangeSentAt: Date;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  lastSignInAt: Date;

  @ApiProperty({ nullable: true })
  rawAppMetaData: object;

  @ApiProperty({ nullable: true })
  rawUserMetaData: object;

  @ApiProperty({ example: true, nullable: true })
  isSuperAdmin: boolean;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  createdAt: Date;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  updatedAt: Date;

  @ApiProperty({ example: '+1234567890', nullable: true })
  phone: string;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  phoneConfirmedAt: Date;

  @ApiProperty({ example: '', nullable: true })
  phoneChange: string;

  @ApiProperty({ example: '', nullable: true })
  phoneChangeToken: string;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  phoneChangeSentAt: Date;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  confirmedAt: Date;

  @ApiProperty({ example: '', nullable: true })
  emailChangeTokenCurrent: string;

  @ApiProperty({ example: 0, nullable: true })
  emailChangeConfirmStatus: number;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  bannedUntil: Date;

  @ApiProperty({ example: '', nullable: true })
  reauthenticationToken: string;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  reauthenticationSentAt: Date;

  @ApiProperty({ example: false })
  isSsoUser: boolean;

  @ApiProperty({ example: '2024-10-24T15:00:00Z', nullable: true })
  deletedAt: Date;

  @ApiProperty({ example: false })
  isAnonymous: boolean;
}
