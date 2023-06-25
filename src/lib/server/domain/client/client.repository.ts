import prisma from '$lib/server/prisma'

import type { Pagination } from "$lib/server/types/repository";
import type { Prisma, Client } from "@prisma/client";
import { NotImplementedException } from "$lib/server/types/Errors";
import type { IClientRepository } from "$lib/server/domain/client/types";

export class ClientRepository implements IClientRepository {
	create(data: Prisma.ClientCreateInput): Promise<Client> {
		return prisma.client.create({data})
	}

	all(): Promise<Client[]> {
		return prisma.client.findMany({
			where: {
				deleted: false
			}
		})
	}

	findById(id: number): Promise<Client> {
		throw new NotImplementedException();
	}

	findWhere(params?: Partial<Client>, pagination?: Pagination): Promise<Array<Client>> {
		throw new NotImplementedException();
	}

	update(params: Partial<Prisma.ClientUpdateInput>): Promise<Client> {
		throw new NotImplementedException();
	}

	async deleteById(id: number): Promise<void> {
		await prisma.client.update({
			where: { id },
			data: {deleted: true}
		})

		return ;
	}
}
