import type { Repository } from "$lib/server/types/repository";
import type { Client, Prisma } from "@prisma/client";

export type IClientRepository = Repository<Client, Prisma.ClientCreateInput>
