import { api } from "@/lib/axios";

export interface GetMonthRevenueOrdersAmount {
    receipt: number;
    diffFromLastMonth: number;
}

export async function getMonthRevenue() {
    const response = await api.get<GetMonthRevenueOrdersAmount>('/metrics/month-receipt');

    return response.data;
}