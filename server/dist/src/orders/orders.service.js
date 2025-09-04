"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrdersService = class OrdersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createOrderDto) {
        const { items, ...orderData } = createOrderDto;
        return this.prisma.order.create({
            data: {
                ...orderData,
                items: {
                    create: items.map((item) => ({
                        quantity: item.quantity,
                        product: { connect: { id: item.productId } },
                        category: { connect: { id: item.categoryId } },
                    })),
                },
            },
            include: {
                custom: true,
                items: {
                    include: {
                        product: true,
                        category: true,
                    },
                },
            },
        });
    }
    async updateAdvanced(id, createOrderDto) {
        return this.prisma.order.update({
            where: { id },
            data: createOrderDto,
        });
    }
    async findAll() {
        return this.prisma.order.findMany({
            include: {
                custom: true,
                items: {
                    include: {
                        product: true,
                        category: true,
                    },
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(id) {
        const order = await this.prisma.order.findUnique({
            where: { id },
            include: {
                custom: true,
                items: {
                    include: {
                        product: true,
                        category: true,
                    },
                },
            },
        });
        if (!order) {
            throw new common_1.NotFoundException(`Order with ID ${id} not found`);
        }
        return order;
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.order.delete({
            where: { id },
        });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map