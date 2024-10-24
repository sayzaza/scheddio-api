import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  lastName?: string;

  @ApiProperty({ required: false })
  phone?: string;

  @ApiProperty({ required: false })
  systemUserId?: string;

  @ApiProperty({ required: false })
  teamName?: string;

  @ApiProperty({ required: false })
  fullName?: string;

  @ApiProperty()
  topClient: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty({ required: false })
  lastTransaction?: Date;

  @ApiProperty({ required: false })
  instagramUser?: string;

  @ApiProperty({ required: false })
  instagramGroup?: string;

  @ApiProperty({ required: false })
  instagramOffice?: string;

  @ApiProperty({ required: false })
  groupName?: string;

  @ApiProperty({ required: false })
  mood?: string;

  @ApiProperty()
  isLoyal: boolean;

  @ApiProperty({ required: false })
  profilePictureLink?: string;
}
