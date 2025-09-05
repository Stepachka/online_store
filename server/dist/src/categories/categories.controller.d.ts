import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
    }>;
    findAll(): Promise<({
        products: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            title: string;
            cost: number;
            img: string;
        }[];
        orderItems: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            quantity: number;
            categoryId: number;
            productId: number;
            orderId: number;
        }[];
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
    })[]>;
    findOne(id: string): Promise<{
        products: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            title: string;
            cost: number;
            img: string;
        }[];
        orderItems: {
            createdAt: Date;
            updatedAt: Date;
            id: number;
            quantity: number;
            categoryId: number;
            productId: number;
            orderId: number;
        }[];
    } & {
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
    }>;
    remove(id: string): Promise<{
        createdAt: Date;
        updatedAt: Date;
        id: number;
        title: string;
    }>;
}
