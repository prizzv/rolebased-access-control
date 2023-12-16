import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Role } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService, private config: ConfigService) { }

    async getAllUsers(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },

        })
        if (user.role !== Role.ADMIN) throw new ForbiddenException('Access Denied');

        const allUsers = this.prisma.user.findMany({
            where: {
                role: {
                    not: Role.ADMIN
                }
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true,
                role: true,
            }
        });

        return allUsers;
    }
}
