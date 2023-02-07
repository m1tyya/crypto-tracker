import * as PrismaClient from '@prisma/client';
import { z } from 'zod';

/// //////////////////////////////////////
// ENUMS
/// //////////////////////////////////////

// PRISMA GENERATED ENUMS
// ------------------------------------------------------

export const AccountScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.AccountScalarFieldEnum);

export const QueryModeSchema = z.nativeEnum(PrismaClient.Prisma.QueryMode);

export const SavedCoinScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.SavedCoinScalarFieldEnum);

export const SessionScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.SessionScalarFieldEnum);

export const SortOrderSchema = z.nativeEnum(PrismaClient.Prisma.SortOrder);

export const TransactionIsolationLevelSchema = z.nativeEnum(PrismaClient.Prisma.TransactionIsolationLevel);

export const UserScalarFieldEnumSchema = z.nativeEnum(PrismaClient.Prisma.UserScalarFieldEnum);

export const VerificationTokenScalarFieldEnumSchema = z.nativeEnum(
	PrismaClient.Prisma.VerificationTokenScalarFieldEnum,
);

// CUSTOM ENUMS
// ------------------------------------------------------

/// //////////////////////////////////////
// MODELS
/// //////////////////////////////////////

// ACCOUNT
// ------------------------------------------------------

export const AccountSchema = z.object({
	access_token: z.string().nullish(),
	expires_at: z.number().int().nullish(),
	id: z.string().cuid(),
	id_token: z.string().nullish(),
	provider: z.string(),
	providerAccountId: z.string(),
	refresh_token: z.string().nullish(),
	scope: z.string().nullish(),
	session_state: z.string().nullish(),
	token_type: z.string().nullish(),
	type: z.string(),
	userId: z.string(),
});

// SESSION
// ------------------------------------------------------

export const SessionSchema = z.object({
	expires: z.date(),
	id: z.string().cuid(),
	sessionToken: z.string(),
	userId: z.string(),
});

// USER
// ------------------------------------------------------

export const UserSchema = z.object({
	email: z.string().nullish(),
	emailVerified: z.date().nullish(),
	id: z.string().cuid(),
	image: z.string().nullish(),
	name: z.string().nullish(),
});

// VERIFICATION TOKEN
// ------------------------------------------------------

export const VerificationTokenSchema = z.object({
	expires: z.date(),
	identifier: z.string(),
	token: z.string(),
});

// SAVED COIN
// ------------------------------------------------------

export const SavedCoinSchema = z.object({
	id: z.string(),
});

/// //////////////////////////////////////
// SELECT & INCLUDE
/// //////////////////////////////////////

// ACCOUNT
// ------------------------------------------------------

export const AccountArgsSchema: z.ZodType<PrismaClient.Prisma.AccountArgs> = z
	.object({
		select: z.lazy(() => AccountSelectSchema).optional(),
		include: z.lazy(() => AccountIncludeSchema).optional(),
	})
	.strict();

export const AccountIncludeSchema: z.ZodType<PrismaClient.Prisma.AccountInclude> = z
	.object({
		user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict();

export const AccountSelectSchema: z.ZodType<PrismaClient.Prisma.AccountSelect> = z
	.object({
		access_token: z.boolean().optional(),
		expires_at: z.boolean().optional(),
		id: z.boolean().optional(),
		id_token: z.boolean().optional(),
		provider: z.boolean().optional(),
		providerAccountId: z.boolean().optional(),
		refresh_token: z.boolean().optional(),
		scope: z.boolean().optional(),
		session_state: z.boolean().optional(),
		token_type: z.boolean().optional(),
		type: z.boolean().optional(),
		userId: z.boolean().optional(),
		user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict();

// SESSION
// ------------------------------------------------------

export const SessionArgsSchema: z.ZodType<PrismaClient.Prisma.SessionArgs> = z
	.object({
		select: z.lazy(() => SessionSelectSchema).optional(),
		include: z.lazy(() => SessionIncludeSchema).optional(),
	})
	.strict();

export const SessionIncludeSchema: z.ZodType<PrismaClient.Prisma.SessionInclude> = z
	.object({
		user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
	})
	.strict();

export const SessionSelectSchema: z.ZodType<PrismaClient.Prisma.SessionSelect> = z
	.object({
		expires: z.boolean().optional(),
		id: z.boolean().optional(),
		sessionToken: z.boolean().optional(),
		user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
		userId: z.boolean().optional(),
	})
	.strict();

// USER
// ------------------------------------------------------

export const UserArgsSchema: z.ZodType<PrismaClient.Prisma.UserArgs> = z
	.object({
		select: z.lazy(() => UserSelectSchema).optional(),
		include: z.lazy(() => UserIncludeSchema).optional(),
	})
	.strict();

export const UserIncludeSchema: z.ZodType<PrismaClient.Prisma.UserInclude> = z
	.object({
		accounts: z.union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)]).optional(),
		savedCoins: z.union([z.boolean(), z.lazy(() => SavedCoinFindManyArgsSchema)]).optional(),
		sessions: z.union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.UserCountOutputTypeArgs> = z
	.object({
		select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.UserCountOutputTypeSelect> = z
	.object({
		accounts: z.boolean().optional(),
		savedCoins: z.boolean().optional(),
		sessions: z.boolean().optional(),
	})
	.strict();

export const UserSelectSchema: z.ZodType<PrismaClient.Prisma.UserSelect> = z
	.object({
		accounts: z.union([z.boolean(), z.lazy(() => AccountFindManyArgsSchema)]).optional(),
		email: z.boolean().optional(),
		emailVerified: z.boolean().optional(),
		id: z.boolean().optional(),
		image: z.boolean().optional(),
		name: z.boolean().optional(),
		savedCoins: z.union([z.boolean(), z.lazy(() => SavedCoinFindManyArgsSchema)]).optional(),
		sessions: z.union([z.boolean(), z.lazy(() => SessionFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

// VERIFICATION TOKEN
// ------------------------------------------------------

export const VerificationTokenSelectSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenSelect> = z
	.object({
		expires: z.boolean().optional(),
		identifier: z.boolean().optional(),
		token: z.boolean().optional(),
	})
	.strict();

// SAVED COIN
// ------------------------------------------------------

export const SavedCoinArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinArgs> = z
	.object({
		select: z.lazy(() => SavedCoinSelectSchema).optional(),
		include: z.lazy(() => SavedCoinIncludeSchema).optional(),
	})
	.strict();

export const SavedCoinIncludeSchema: z.ZodType<PrismaClient.Prisma.SavedCoinInclude> = z
	.object({
		users: z.union([z.boolean(), z.lazy(() => UserFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => SavedCoinCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const SavedCoinCountOutputTypeArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinCountOutputTypeArgs> = z
	.object({
		select: z.lazy(() => SavedCoinCountOutputTypeSelectSchema).nullish(),
	})
	.strict();

export const SavedCoinCountOutputTypeSelectSchema: z.ZodType<PrismaClient.Prisma.SavedCoinCountOutputTypeSelect> = z
	.object({
		users: z.boolean().optional(),
	})
	.strict();

export const SavedCoinSelectSchema: z.ZodType<PrismaClient.Prisma.SavedCoinSelect> = z
	.object({
		id: z.boolean().optional(),
		users: z.union([z.boolean(), z.lazy(() => UserFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => SavedCoinCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

/// //////////////////////////////////////
// INPUT TYPES
/// //////////////////////////////////////

export const AccountWhereInputSchema: z.ZodType<PrismaClient.Prisma.AccountWhereInput> = z
	.object({
		AND: z.union([z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array()]).optional(),
		OR: z
			.lazy(() => AccountWhereInputSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => AccountWhereInputSchema), z.lazy(() => AccountWhereInputSchema).array()]).optional(),
		access_token: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		expires_at: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		id_token: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		provider: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		providerAccountId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		refresh_token: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		scope: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		session_state: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		token_type: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
	})
	.strict();

export const AccountOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByWithRelationInput> = z
	.object({
		access_token: z.lazy(() => SortOrderSchema).optional(),
		expires_at: z.lazy(() => SortOrderSchema).optional(),
		id: z.lazy(() => SortOrderSchema).optional(),
		id_token: z.lazy(() => SortOrderSchema).optional(),
		provider: z.lazy(() => SortOrderSchema).optional(),
		providerAccountId: z.lazy(() => SortOrderSchema).optional(),
		refresh_token: z.lazy(() => SortOrderSchema).optional(),
		scope: z.lazy(() => SortOrderSchema).optional(),
		session_state: z.lazy(() => SortOrderSchema).optional(),
		token_type: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
	})
	.strict();

export const AccountWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.AccountWhereUniqueInput> = z
	.object({
		id: z.string().cuid().optional(),
		provider_providerAccountId: z.lazy(() => AccountProviderProviderAccountIdCompoundUniqueInputSchema).optional(),
	})
	.strict();

export const AccountOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByWithAggregationInput> =
	z
		.object({
			access_token: z.lazy(() => SortOrderSchema).optional(),
			expires_at: z.lazy(() => SortOrderSchema).optional(),
			id: z.lazy(() => SortOrderSchema).optional(),
			id_token: z.lazy(() => SortOrderSchema).optional(),
			provider: z.lazy(() => SortOrderSchema).optional(),
			providerAccountId: z.lazy(() => SortOrderSchema).optional(),
			refresh_token: z.lazy(() => SortOrderSchema).optional(),
			scope: z.lazy(() => SortOrderSchema).optional(),
			session_state: z.lazy(() => SortOrderSchema).optional(),
			token_type: z.lazy(() => SortOrderSchema).optional(),
			type: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => AccountCountOrderByAggregateInputSchema).optional(),
			_avg: z.lazy(() => AccountAvgOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => AccountMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => AccountMinOrderByAggregateInputSchema).optional(),
			_sum: z.lazy(() => AccountSumOrderByAggregateInputSchema).optional(),
		})
		.strict();

export const AccountScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.AccountScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
					z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => AccountScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => AccountScalarWhereWithAggregatesInputSchema),
					z.lazy(() => AccountScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			access_token: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			expires_at: z
				.union([z.lazy(() => IntNullableWithAggregatesFilterSchema), z.number()])
				.optional()
				.nullable(),
			id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			id_token: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			provider: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			providerAccountId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			refresh_token: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			scope: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			session_state: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			token_type: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			type: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		})
		.strict();

export const SessionWhereInputSchema: z.ZodType<PrismaClient.Prisma.SessionWhereInput> = z
	.object({
		AND: z.union([z.lazy(() => SessionWhereInputSchema), z.lazy(() => SessionWhereInputSchema).array()]).optional(),
		OR: z
			.lazy(() => SessionWhereInputSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => SessionWhereInputSchema), z.lazy(() => SessionWhereInputSchema).array()]).optional(),
		expires: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		sessionToken: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		user: z.union([z.lazy(() => UserRelationFilterSchema), z.lazy(() => UserWhereInputSchema)]).optional(),
		userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
	})
	.strict();

export const SessionOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.SessionOrderByWithRelationInput> = z
	.object({
		expires: z.lazy(() => SortOrderSchema).optional(),
		id: z.lazy(() => SortOrderSchema).optional(),
		sessionToken: z.lazy(() => SortOrderSchema).optional(),
		user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const SessionWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.SessionWhereUniqueInput> = z
	.object({
		id: z.string().cuid().optional(),
		sessionToken: z.string().optional(),
	})
	.strict();

export const SessionOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.SessionOrderByWithAggregationInput> =
	z
		.object({
			expires: z.lazy(() => SortOrderSchema).optional(),
			id: z.lazy(() => SortOrderSchema).optional(),
			sessionToken: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => SessionCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => SessionMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => SessionMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export const SessionScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.SessionScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
					z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => SessionScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => SessionScalarWhereWithAggregatesInputSchema),
					z.lazy(() => SessionScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			expires: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
			id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			sessionToken: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			userId: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		})
		.strict();

export const UserWhereInputSchema: z.ZodType<PrismaClient.Prisma.UserWhereInput> = z
	.object({
		AND: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
		OR: z
			.lazy(() => UserWhereInputSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => UserWhereInputSchema), z.lazy(() => UserWhereInputSchema).array()]).optional(),
		accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
		email: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		emailVerified: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.date()])
			.optional()
			.nullable(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		image: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		name: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		savedCoins: z.lazy(() => SavedCoinListRelationFilterSchema).optional(),
		sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
	})
	.strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithRelationInput> = z
	.object({
		accounts: z.lazy(() => AccountOrderByRelationAggregateInputSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		emailVerified: z.lazy(() => SortOrderSchema).optional(),
		id: z.lazy(() => SortOrderSchema).optional(),
		image: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		savedCoins: z.lazy(() => SavedCoinOrderByRelationAggregateInputSchema).optional(),
		sessions: z.lazy(() => SessionOrderByRelationAggregateInputSchema).optional(),
	})
	.strict();

export const UserWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.UserWhereUniqueInput> = z
	.object({
		email: z.string().optional(),
		id: z.string().cuid().optional(),
	})
	.strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByWithAggregationInput> = z
	.object({
		email: z.lazy(() => SortOrderSchema).optional(),
		emailVerified: z.lazy(() => SortOrderSchema).optional(),
		id: z.lazy(() => SortOrderSchema).optional(),
		image: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
		_max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
		_min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
	})
	.strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.UserScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => UserScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
					z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			email: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			emailVerified: z
				.union([z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.date()])
				.optional()
				.nullable(),
			id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			image: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
			name: z
				.union([z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string()])
				.optional()
				.nullable(),
		})
		.strict();

export const VerificationTokenWhereInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => VerificationTokenWhereInputSchema), z.lazy(() => VerificationTokenWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => VerificationTokenWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => VerificationTokenWhereInputSchema), z.lazy(() => VerificationTokenWhereInputSchema).array()])
			.optional(),
		expires: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
		identifier: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		token: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
	})
	.strict();

export const VerificationTokenOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenOrderByWithRelationInput> =
	z
		.object({
			expires: z.lazy(() => SortOrderSchema).optional(),
			identifier: z.lazy(() => SortOrderSchema).optional(),
			token: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const VerificationTokenWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenWhereUniqueInput> =
	z
		.object({
			token: z.string().optional(),
			identifier_token: z.lazy(() => VerificationTokenIdentifierTokenCompoundUniqueInputSchema).optional(),
		})
		.strict();

export const VerificationTokenOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenOrderByWithAggregationInput> =
	z
		.object({
			expires: z.lazy(() => SortOrderSchema).optional(),
			identifier: z.lazy(() => SortOrderSchema).optional(),
			token: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => VerificationTokenCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => VerificationTokenMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => VerificationTokenMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export const VerificationTokenScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),
					z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema),
					z.lazy(() => VerificationTokenScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			expires: z.union([z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date()]).optional(),
			identifier: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
			token: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		})
		.strict();

export const SavedCoinWhereInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinWhereInput> = z
	.object({
		AND: z.union([z.lazy(() => SavedCoinWhereInputSchema), z.lazy(() => SavedCoinWhereInputSchema).array()]).optional(),
		OR: z
			.lazy(() => SavedCoinWhereInputSchema)
			.array()
			.optional(),
		NOT: z.union([z.lazy(() => SavedCoinWhereInputSchema), z.lazy(() => SavedCoinWhereInputSchema).array()]).optional(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		users: z.lazy(() => UserListRelationFilterSchema).optional(),
	})
	.strict();

export const SavedCoinOrderByWithRelationInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinOrderByWithRelationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			users: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional(),
		})
		.strict();

export const SavedCoinWhereUniqueInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinWhereUniqueInput> = z
	.object({
		id: z.string().optional(),
	})
	.strict();

export const SavedCoinOrderByWithAggregationInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinOrderByWithAggregationInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
			_count: z.lazy(() => SavedCoinCountOrderByAggregateInputSchema).optional(),
			_max: z.lazy(() => SavedCoinMaxOrderByAggregateInputSchema).optional(),
			_min: z.lazy(() => SavedCoinMinOrderByAggregateInputSchema).optional(),
		})
		.strict();

export const SavedCoinScalarWhereWithAggregatesInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinScalarWhereWithAggregatesInput> =
	z
		.object({
			AND: z
				.union([
					z.lazy(() => SavedCoinScalarWhereWithAggregatesInputSchema),
					z.lazy(() => SavedCoinScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			OR: z
				.lazy(() => SavedCoinScalarWhereWithAggregatesInputSchema)
				.array()
				.optional(),
			NOT: z
				.union([
					z.lazy(() => SavedCoinScalarWhereWithAggregatesInputSchema),
					z.lazy(() => SavedCoinScalarWhereWithAggregatesInputSchema).array(),
				])
				.optional(),
			id: z.union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()]).optional(),
		})
		.strict();

export const AccountCreateInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateInput> = z
	.object({
		access_token: z.string().optional().nullable(),
		expires_at: z.number().int().optional().nullable(),
		id: z.string().cuid().optional(),
		id_token: z.string().optional().nullable(),
		provider: z.string(),
		providerAccountId: z.string(),
		refresh_token: z.string().optional().nullable(),
		scope: z.string().optional().nullable(),
		session_state: z.string().optional().nullable(),
		token_type: z.string().optional().nullable(),
		type: z.string(),
		user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputSchema),
	})
	.strict();

export const AccountUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateInput> = z
	.object({
		access_token: z.string().optional().nullable(),
		expires_at: z.number().int().optional().nullable(),
		id: z.string().cuid().optional(),
		id_token: z.string().optional().nullable(),
		provider: z.string(),
		providerAccountId: z.string(),
		refresh_token: z.string().optional().nullable(),
		scope: z.string().optional().nullable(),
		session_state: z.string().optional().nullable(),
		token_type: z.string().optional().nullable(),
		type: z.string(),
		userId: z.string(),
	})
	.strict();

export const AccountUpdateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateInput> = z
	.object({
		access_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		expires_at: z
			.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		id_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		refresh_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		scope: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		session_state: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		token_type: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputSchema).optional(),
	})
	.strict();

export const AccountUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateInput> = z
	.object({
		access_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		expires_at: z
			.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		id_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		refresh_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		scope: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		session_state: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		token_type: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export const AccountCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyInput> = z
	.object({
		access_token: z.string().optional().nullable(),
		expires_at: z.number().int().optional().nullable(),
		id: z.string().cuid().optional(),
		id_token: z.string().optional().nullable(),
		provider: z.string(),
		providerAccountId: z.string(),
		refresh_token: z.string().optional().nullable(),
		scope: z.string().optional().nullable(),
		session_state: z.string().optional().nullable(),
		token_type: z.string().optional().nullable(),
		type: z.string(),
		userId: z.string(),
	})
	.strict();

export const AccountUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyMutationInput> = z
	.object({
		access_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		expires_at: z
			.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		id_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		refresh_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		scope: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		session_state: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		token_type: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export const AccountUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyInput> = z
	.object({
		access_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		expires_at: z
			.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		id_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		refresh_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		scope: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		session_state: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		token_type: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export const SessionCreateInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateInput> = z
	.object({
		expires: z.date(),
		id: z.string().cuid().optional(),
		sessionToken: z.string(),
		user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputSchema),
	})
	.strict();

export const SessionUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedCreateInput> = z
	.object({
		expires: z.date(),
		id: z.string().cuid().optional(),
		sessionToken: z.string(),
		userId: z.string(),
	})
	.strict();

export const SessionUpdateInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateInput> = z
	.object({
		expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		user: z.lazy(() => UserUpdateOneRequiredWithoutSessionsNestedInputSchema).optional(),
	})
	.strict();

export const SessionUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedUpdateInput> = z
	.object({
		expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export const SessionCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateManyInput> = z
	.object({
		expires: z.date(),
		id: z.string().cuid().optional(),
		sessionToken: z.string(),
		userId: z.string(),
	})
	.strict();

export const SessionUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateManyMutationInput> = z
	.object({
		expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export const SessionUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedUpdateManyInput> = z
	.object({
		expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export const UserCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateInput> = z
	.object({
		accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
		email: z.string().optional().nullable(),
		emailVerified: z.date().optional().nullable(),
		id: z.string().cuid().optional(),
		image: z.string().optional().nullable(),
		name: z.string().optional().nullable(),
		savedCoins: z.lazy(() => SavedCoinCreateNestedManyWithoutUsersInputSchema).optional(),
		sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
	})
	.strict();

export const UserUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateInput> = z
	.object({
		accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
		email: z.string().optional().nullable(),
		emailVerified: z.date().optional().nullable(),
		id: z.string().cuid().optional(),
		image: z.string().optional().nullable(),
		name: z.string().optional().nullable(),
		savedCoins: z.lazy(() => SavedCoinUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
		sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
	})
	.strict();

export const UserUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateInput> = z
	.object({
		accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
		email: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		emailVerified: z
			.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		image: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		name: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		savedCoins: z.lazy(() => SavedCoinUpdateManyWithoutUsersNestedInputSchema).optional(),
		sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
	})
	.strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateInput> = z
	.object({
		accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
		email: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		emailVerified: z
			.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		image: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		name: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		savedCoins: z.lazy(() => SavedCoinUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
		sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
	})
	.strict();

export const UserCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateManyInput> = z
	.object({
		email: z.string().optional().nullable(),
		emailVerified: z.date().optional().nullable(),
		id: z.string().cuid().optional(),
		image: z.string().optional().nullable(),
		name: z.string().optional().nullable(),
	})
	.strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyMutationInput> = z
	.object({
		email: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		emailVerified: z
			.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		image: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		name: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateManyInput> = z
	.object({
		email: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		emailVerified: z
			.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		image: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		name: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export const VerificationTokenCreateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenCreateInput> = z
	.object({
		expires: z.date(),
		identifier: z.string(),
		token: z.string(),
	})
	.strict();

export const VerificationTokenUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUncheckedCreateInput> =
	z
		.object({
			expires: z.date(),
			identifier: z.string(),
			token: z.string(),
		})
		.strict();

export const VerificationTokenUpdateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUpdateInput> = z
	.object({
		expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		identifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export const VerificationTokenUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUncheckedUpdateInput> =
	z
		.object({
			expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			identifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export const VerificationTokenCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenCreateManyInput> = z
	.object({
		expires: z.date(),
		identifier: z.string(),
		token: z.string(),
	})
	.strict();

export const VerificationTokenUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUpdateManyMutationInput> =
	z
		.object({
			expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			identifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export const VerificationTokenUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUncheckedUpdateManyInput> =
	z
		.object({
			expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			identifier: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			token: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export const SavedCoinCreateInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinCreateInput> = z
	.object({
		id: z.string(),
		users: z.lazy(() => UserCreateNestedManyWithoutSavedCoinsInputSchema).optional(),
	})
	.strict();

export const SavedCoinUncheckedCreateInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUncheckedCreateInput> = z
	.object({
		id: z.string(),
		users: z.lazy(() => UserUncheckedCreateNestedManyWithoutSavedCoinsInputSchema).optional(),
	})
	.strict();

export const SavedCoinUpdateInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUpdateInput> = z
	.object({
		id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		users: z.lazy(() => UserUpdateManyWithoutSavedCoinsNestedInputSchema).optional(),
	})
	.strict();

export const SavedCoinUncheckedUpdateInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUncheckedUpdateInput> = z
	.object({
		id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		users: z.lazy(() => UserUncheckedUpdateManyWithoutSavedCoinsNestedInputSchema).optional(),
	})
	.strict();

export const SavedCoinCreateManyInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinCreateManyInput> = z
	.object({
		id: z.string(),
	})
	.strict();

export const SavedCoinUpdateManyMutationInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUpdateManyMutationInput> = z
	.object({
		id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export const SavedCoinUncheckedUpdateManyInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUncheckedUpdateManyInput> =
	z
		.object({
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export const StringNullableFilterSchema: z.ZodType<PrismaClient.Prisma.StringNullableFilter> = z
	.object({
		equals: z.string().optional().nullable(),
		in: z.string().array().optional().nullable(),
		notIn: z.string().array().optional().nullable(),
		lt: z.string().optional(),
		lte: z.string().optional(),
		gt: z.string().optional(),
		gte: z.string().optional(),
		contains: z.string().optional(),
		startsWith: z.string().optional(),
		endsWith: z.string().optional(),
		mode: z.lazy(() => QueryModeSchema).optional(),
		not: z
			.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export const IntNullableFilterSchema: z.ZodType<PrismaClient.Prisma.IntNullableFilter> = z
	.object({
		equals: z.number().optional().nullable(),
		in: z.number().array().optional().nullable(),
		notIn: z.number().array().optional().nullable(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z
			.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export const StringFilterSchema: z.ZodType<PrismaClient.Prisma.StringFilter> = z
	.object({
		equals: z.string().optional(),
		in: z.string().array().optional(),
		notIn: z.string().array().optional(),
		lt: z.string().optional(),
		lte: z.string().optional(),
		gt: z.string().optional(),
		gte: z.string().optional(),
		contains: z.string().optional(),
		startsWith: z.string().optional(),
		endsWith: z.string().optional(),
		mode: z.lazy(() => QueryModeSchema).optional(),
		not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
	})
	.strict();

export const UserRelationFilterSchema: z.ZodType<PrismaClient.Prisma.UserRelationFilter> = z
	.object({
		is: z.lazy(() => UserWhereInputSchema).optional(),
		isNot: z.lazy(() => UserWhereInputSchema).optional(),
	})
	.strict();

export const AccountProviderProviderAccountIdCompoundUniqueInputSchema: z.ZodType<PrismaClient.Prisma.AccountProviderProviderAccountIdCompoundUniqueInput> =
	z
		.object({
			provider: z.string(),
			providerAccountId: z.string(),
		})
		.strict();

export const AccountCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountCountOrderByAggregateInput> =
	z
		.object({
			access_token: z.lazy(() => SortOrderSchema).optional(),
			expires_at: z.lazy(() => SortOrderSchema).optional(),
			id: z.lazy(() => SortOrderSchema).optional(),
			id_token: z.lazy(() => SortOrderSchema).optional(),
			provider: z.lazy(() => SortOrderSchema).optional(),
			providerAccountId: z.lazy(() => SortOrderSchema).optional(),
			refresh_token: z.lazy(() => SortOrderSchema).optional(),
			scope: z.lazy(() => SortOrderSchema).optional(),
			session_state: z.lazy(() => SortOrderSchema).optional(),
			token_type: z.lazy(() => SortOrderSchema).optional(),
			type: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const AccountAvgOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountAvgOrderByAggregateInput> = z
	.object({
		expires_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const AccountMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountMaxOrderByAggregateInput> = z
	.object({
		access_token: z.lazy(() => SortOrderSchema).optional(),
		expires_at: z.lazy(() => SortOrderSchema).optional(),
		id: z.lazy(() => SortOrderSchema).optional(),
		id_token: z.lazy(() => SortOrderSchema).optional(),
		provider: z.lazy(() => SortOrderSchema).optional(),
		providerAccountId: z.lazy(() => SortOrderSchema).optional(),
		refresh_token: z.lazy(() => SortOrderSchema).optional(),
		scope: z.lazy(() => SortOrderSchema).optional(),
		session_state: z.lazy(() => SortOrderSchema).optional(),
		token_type: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const AccountMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountMinOrderByAggregateInput> = z
	.object({
		access_token: z.lazy(() => SortOrderSchema).optional(),
		expires_at: z.lazy(() => SortOrderSchema).optional(),
		id: z.lazy(() => SortOrderSchema).optional(),
		id_token: z.lazy(() => SortOrderSchema).optional(),
		provider: z.lazy(() => SortOrderSchema).optional(),
		providerAccountId: z.lazy(() => SortOrderSchema).optional(),
		refresh_token: z.lazy(() => SortOrderSchema).optional(),
		scope: z.lazy(() => SortOrderSchema).optional(),
		session_state: z.lazy(() => SortOrderSchema).optional(),
		token_type: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const AccountSumOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountSumOrderByAggregateInput> = z
	.object({
		expires_at: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.StringNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.string().optional().nullable(),
			in: z.string().array().optional().nullable(),
			notIn: z.string().array().optional().nullable(),
			lt: z.string().optional(),
			lte: z.string().optional(),
			gt: z.string().optional(),
			gte: z.string().optional(),
			contains: z.string().optional(),
			startsWith: z.string().optional(),
			endsWith: z.string().optional(),
			mode: z.lazy(() => QueryModeSchema).optional(),
			not: z
				.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
		})
		.strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.IntNullableWithAggregatesFilter> = z
	.object({
		equals: z.number().optional().nullable(),
		in: z.number().array().optional().nullable(),
		notIn: z.number().array().optional().nullable(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z
			.union([z.number(), z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)])
			.optional()
			.nullable(),
		_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
		_avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
		_sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
		_min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
		_max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
	})
	.strict();

export const StringWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.StringWithAggregatesFilter> = z
	.object({
		equals: z.string().optional(),
		in: z.string().array().optional(),
		notIn: z.string().array().optional(),
		lt: z.string().optional(),
		lte: z.string().optional(),
		gt: z.string().optional(),
		gte: z.string().optional(),
		contains: z.string().optional(),
		startsWith: z.string().optional(),
		endsWith: z.string().optional(),
		mode: z.lazy(() => QueryModeSchema).optional(),
		not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
		_count: z.lazy(() => NestedIntFilterSchema).optional(),
		_min: z.lazy(() => NestedStringFilterSchema).optional(),
		_max: z.lazy(() => NestedStringFilterSchema).optional(),
	})
	.strict();

export const DateTimeFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeFilter> = z
	.object({
		equals: z.date().optional(),
		in: z.date().array().optional(),
		notIn: z.date().array().optional(),
		lt: z.date().optional(),
		lte: z.date().optional(),
		gt: z.date().optional(),
		gte: z.date().optional(),
		not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
	})
	.strict();

export const SessionCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SessionCountOrderByAggregateInput> =
	z
		.object({
			expires: z.lazy(() => SortOrderSchema).optional(),
			id: z.lazy(() => SortOrderSchema).optional(),
			sessionToken: z.lazy(() => SortOrderSchema).optional(),
			userId: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const SessionMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SessionMaxOrderByAggregateInput> = z
	.object({
		expires: z.lazy(() => SortOrderSchema).optional(),
		id: z.lazy(() => SortOrderSchema).optional(),
		sessionToken: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const SessionMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SessionMinOrderByAggregateInput> = z
	.object({
		expires: z.lazy(() => SortOrderSchema).optional(),
		id: z.lazy(() => SortOrderSchema).optional(),
		sessionToken: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeWithAggregatesFilter> = z
	.object({
		equals: z.date().optional(),
		in: z.date().array().optional(),
		notIn: z.date().array().optional(),
		lt: z.date().optional(),
		lte: z.date().optional(),
		gt: z.date().optional(),
		gte: z.date().optional(),
		not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
		_count: z.lazy(() => NestedIntFilterSchema).optional(),
		_min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
		_max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
	})
	.strict();

export const AccountListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.AccountListRelationFilter> = z
	.object({
		every: z.lazy(() => AccountWhereInputSchema).optional(),
		some: z.lazy(() => AccountWhereInputSchema).optional(),
		none: z.lazy(() => AccountWhereInputSchema).optional(),
	})
	.strict();

export const DateTimeNullableFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeNullableFilter> = z
	.object({
		equals: z.date().optional().nullable(),
		in: z.date().array().optional().nullable(),
		notIn: z.date().array().optional().nullable(),
		lt: z.date().optional(),
		lte: z.date().optional(),
		gt: z.date().optional(),
		gte: z.date().optional(),
		not: z
			.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export const SavedCoinListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.SavedCoinListRelationFilter> = z
	.object({
		every: z.lazy(() => SavedCoinWhereInputSchema).optional(),
		some: z.lazy(() => SavedCoinWhereInputSchema).optional(),
		none: z.lazy(() => SavedCoinWhereInputSchema).optional(),
	})
	.strict();

export const SessionListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.SessionListRelationFilter> = z
	.object({
		every: z.lazy(() => SessionWhereInputSchema).optional(),
		some: z.lazy(() => SessionWhereInputSchema).optional(),
		none: z.lazy(() => SessionWhereInputSchema).optional(),
	})
	.strict();

export const AccountOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.AccountOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const SavedCoinOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const SessionOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SessionOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserCountOrderByAggregateInput> = z
	.object({
		email: z.lazy(() => SortOrderSchema).optional(),
		emailVerified: z.lazy(() => SortOrderSchema).optional(),
		id: z.lazy(() => SortOrderSchema).optional(),
		image: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMaxOrderByAggregateInput> = z
	.object({
		email: z.lazy(() => SortOrderSchema).optional(),
		emailVerified: z.lazy(() => SortOrderSchema).optional(),
		id: z.lazy(() => SortOrderSchema).optional(),
		image: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserMinOrderByAggregateInput> = z
	.object({
		email: z.lazy(() => SortOrderSchema).optional(),
		emailVerified: z.lazy(() => SortOrderSchema).optional(),
		id: z.lazy(() => SortOrderSchema).optional(),
		image: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
	})
	.strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.DateTimeNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.date().optional().nullable(),
			in: z.date().array().optional().nullable(),
			notIn: z.date().array().optional().nullable(),
			lt: z.date().optional(),
			lte: z.date().optional(),
			gt: z.date().optional(),
			gte: z.date().optional(),
			not: z
				.union([z.date(), z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
		})
		.strict();

export const VerificationTokenIdentifierTokenCompoundUniqueInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenIdentifierTokenCompoundUniqueInput> =
	z
		.object({
			identifier: z.string(),
			token: z.string(),
		})
		.strict();

export const VerificationTokenCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenCountOrderByAggregateInput> =
	z
		.object({
			expires: z.lazy(() => SortOrderSchema).optional(),
			identifier: z.lazy(() => SortOrderSchema).optional(),
			token: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const VerificationTokenMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenMaxOrderByAggregateInput> =
	z
		.object({
			expires: z.lazy(() => SortOrderSchema).optional(),
			identifier: z.lazy(() => SortOrderSchema).optional(),
			token: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const VerificationTokenMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenMinOrderByAggregateInput> =
	z
		.object({
			expires: z.lazy(() => SortOrderSchema).optional(),
			identifier: z.lazy(() => SortOrderSchema).optional(),
			token: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const UserListRelationFilterSchema: z.ZodType<PrismaClient.Prisma.UserListRelationFilter> = z
	.object({
		every: z.lazy(() => UserWhereInputSchema).optional(),
		some: z.lazy(() => UserWhereInputSchema).optional(),
		none: z.lazy(() => UserWhereInputSchema).optional(),
	})
	.strict();

export const UserOrderByRelationAggregateInputSchema: z.ZodType<PrismaClient.Prisma.UserOrderByRelationAggregateInput> =
	z
		.object({
			_count: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const SavedCoinCountOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinCountOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const SavedCoinMaxOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinMaxOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const SavedCoinMinOrderByAggregateInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinMinOrderByAggregateInput> =
	z
		.object({
			id: z.lazy(() => SortOrderSchema).optional(),
		})
		.strict();

export const UserCreateNestedOneWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateNestedOneWithoutAccountsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutAccountsInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
		})
		.strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableStringFieldUpdateOperationsInput> =
	z
		.object({
			set: z.string().optional().nullable(),
		})
		.strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableIntFieldUpdateOperationsInput> =
	z
		.object({
			set: z.number().optional().nullable(),
			increment: z.number().optional(),
			decrement: z.number().optional(),
			multiply: z.number().optional(),
			divide: z.number().optional(),
		})
		.strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.StringFieldUpdateOperationsInput> = z
	.object({
		set: z.string().optional(),
	})
	.strict();

export const UserUpdateOneRequiredWithoutAccountsNestedInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateOneRequiredWithoutAccountsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutAccountsInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAccountsInputSchema).optional(),
			upsert: z.lazy(() => UserUpsertWithoutAccountsInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateWithoutAccountsInputSchema),
					z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
				])
				.optional(),
		})
		.strict();

export const UserCreateNestedOneWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateNestedOneWithoutSessionsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutSessionsInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
		})
		.strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.DateTimeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.date().optional(),
		})
		.strict();

export const UserUpdateOneRequiredWithoutSessionsNestedInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateOneRequiredWithoutSessionsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutSessionsInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSessionsInputSchema).optional(),
			upsert: z.lazy(() => UserUpsertWithoutSessionsInputSchema).optional(),
			connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateWithoutSessionsInputSchema),
					z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
				])
				.optional(),
		})
		.strict();

export const AccountCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateNestedManyWithoutUserInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AccountCreateWithoutUserInputSchema),
					z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
					z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export const SavedCoinCreateNestedManyWithoutUsersInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinCreateNestedManyWithoutUsersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => SavedCoinCreateWithoutUsersInputSchema),
					z.lazy(() => SavedCoinCreateWithoutUsersInputSchema).array(),
					z.lazy(() => SavedCoinUncheckedCreateWithoutUsersInputSchema),
					z.lazy(() => SavedCoinUncheckedCreateWithoutUsersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => SavedCoinCreateOrConnectWithoutUsersInputSchema),
					z.lazy(() => SavedCoinCreateOrConnectWithoutUsersInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([z.lazy(() => SavedCoinWhereUniqueInputSchema), z.lazy(() => SavedCoinWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export const SessionCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateNestedManyWithoutUserInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => SessionCreateWithoutUserInputSchema),
					z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
					z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export const AccountUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateNestedManyWithoutUserInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AccountCreateWithoutUserInputSchema),
					z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
					z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export const SavedCoinUncheckedCreateNestedManyWithoutUsersInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUncheckedCreateNestedManyWithoutUsersInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => SavedCoinCreateWithoutUsersInputSchema),
					z.lazy(() => SavedCoinCreateWithoutUsersInputSchema).array(),
					z.lazy(() => SavedCoinUncheckedCreateWithoutUsersInputSchema),
					z.lazy(() => SavedCoinUncheckedCreateWithoutUsersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => SavedCoinCreateOrConnectWithoutUsersInputSchema),
					z.lazy(() => SavedCoinCreateOrConnectWithoutUsersInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([z.lazy(() => SavedCoinWhereUniqueInputSchema), z.lazy(() => SavedCoinWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export const SessionUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedCreateNestedManyWithoutUserInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => SessionCreateWithoutUserInputSchema),
					z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
					z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
			connect: z
				.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export const AccountUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AccountCreateWithoutUserInputSchema),
					z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
					z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()])
				.optional(),
			disconnect: z
				.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()])
				.optional(),
			delete: z
				.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()])
				.optional(),
			connect: z
				.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()])
				.optional(),
			update: z
				.union([
					z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()])
				.optional(),
		})
		.strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<PrismaClient.Prisma.NullableDateTimeFieldUpdateOperationsInput> =
	z
		.object({
			set: z.date().optional().nullable(),
		})
		.strict();

export const SavedCoinUpdateManyWithoutUsersNestedInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUpdateManyWithoutUsersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => SavedCoinCreateWithoutUsersInputSchema),
					z.lazy(() => SavedCoinCreateWithoutUsersInputSchema).array(),
					z.lazy(() => SavedCoinUncheckedCreateWithoutUsersInputSchema),
					z.lazy(() => SavedCoinUncheckedCreateWithoutUsersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => SavedCoinCreateOrConnectWithoutUsersInputSchema),
					z.lazy(() => SavedCoinCreateOrConnectWithoutUsersInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => SavedCoinUpsertWithWhereUniqueWithoutUsersInputSchema),
					z.lazy(() => SavedCoinUpsertWithWhereUniqueWithoutUsersInputSchema).array(),
				])
				.optional(),
			set: z
				.union([z.lazy(() => SavedCoinWhereUniqueInputSchema), z.lazy(() => SavedCoinWhereUniqueInputSchema).array()])
				.optional(),
			disconnect: z
				.union([z.lazy(() => SavedCoinWhereUniqueInputSchema), z.lazy(() => SavedCoinWhereUniqueInputSchema).array()])
				.optional(),
			delete: z
				.union([z.lazy(() => SavedCoinWhereUniqueInputSchema), z.lazy(() => SavedCoinWhereUniqueInputSchema).array()])
				.optional(),
			connect: z
				.union([z.lazy(() => SavedCoinWhereUniqueInputSchema), z.lazy(() => SavedCoinWhereUniqueInputSchema).array()])
				.optional(),
			update: z
				.union([
					z.lazy(() => SavedCoinUpdateWithWhereUniqueWithoutUsersInputSchema),
					z.lazy(() => SavedCoinUpdateWithWhereUniqueWithoutUsersInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => SavedCoinUpdateManyWithWhereWithoutUsersInputSchema),
					z.lazy(() => SavedCoinUpdateManyWithWhereWithoutUsersInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([z.lazy(() => SavedCoinScalarWhereInputSchema), z.lazy(() => SavedCoinScalarWhereInputSchema).array()])
				.optional(),
		})
		.strict();

export const SessionUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => SessionCreateWithoutUserInputSchema),
					z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
					z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
				.optional(),
			disconnect: z
				.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
				.optional(),
			delete: z
				.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
				.optional(),
			connect: z
				.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
				.optional(),
			update: z
				.union([
					z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()])
				.optional(),
		})
		.strict();

export const AccountUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => AccountCreateWithoutUserInputSchema),
					z.lazy(() => AccountCreateWithoutUserInputSchema).array(),
					z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => AccountCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => AccountUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => AccountCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()])
				.optional(),
			disconnect: z
				.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()])
				.optional(),
			delete: z
				.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()])
				.optional(),
			connect: z
				.union([z.lazy(() => AccountWhereUniqueInputSchema), z.lazy(() => AccountWhereUniqueInputSchema).array()])
				.optional(),
			update: z
				.union([
					z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => AccountUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => AccountUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()])
				.optional(),
		})
		.strict();

export const SavedCoinUncheckedUpdateManyWithoutUsersNestedInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUncheckedUpdateManyWithoutUsersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => SavedCoinCreateWithoutUsersInputSchema),
					z.lazy(() => SavedCoinCreateWithoutUsersInputSchema).array(),
					z.lazy(() => SavedCoinUncheckedCreateWithoutUsersInputSchema),
					z.lazy(() => SavedCoinUncheckedCreateWithoutUsersInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => SavedCoinCreateOrConnectWithoutUsersInputSchema),
					z.lazy(() => SavedCoinCreateOrConnectWithoutUsersInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => SavedCoinUpsertWithWhereUniqueWithoutUsersInputSchema),
					z.lazy(() => SavedCoinUpsertWithWhereUniqueWithoutUsersInputSchema).array(),
				])
				.optional(),
			set: z
				.union([z.lazy(() => SavedCoinWhereUniqueInputSchema), z.lazy(() => SavedCoinWhereUniqueInputSchema).array()])
				.optional(),
			disconnect: z
				.union([z.lazy(() => SavedCoinWhereUniqueInputSchema), z.lazy(() => SavedCoinWhereUniqueInputSchema).array()])
				.optional(),
			delete: z
				.union([z.lazy(() => SavedCoinWhereUniqueInputSchema), z.lazy(() => SavedCoinWhereUniqueInputSchema).array()])
				.optional(),
			connect: z
				.union([z.lazy(() => SavedCoinWhereUniqueInputSchema), z.lazy(() => SavedCoinWhereUniqueInputSchema).array()])
				.optional(),
			update: z
				.union([
					z.lazy(() => SavedCoinUpdateWithWhereUniqueWithoutUsersInputSchema),
					z.lazy(() => SavedCoinUpdateWithWhereUniqueWithoutUsersInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => SavedCoinUpdateManyWithWhereWithoutUsersInputSchema),
					z.lazy(() => SavedCoinUpdateManyWithWhereWithoutUsersInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([z.lazy(() => SavedCoinScalarWhereInputSchema), z.lazy(() => SavedCoinScalarWhereInputSchema).array()])
				.optional(),
		})
		.strict();

export const SessionUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => SessionCreateWithoutUserInputSchema),
					z.lazy(() => SessionCreateWithoutUserInputSchema).array(),
					z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
					z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema),
					z.lazy(() => SessionCreateOrConnectWithoutUserInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => SessionUpsertWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => SessionCreateManyUserInputEnvelopeSchema).optional(),
			set: z
				.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
				.optional(),
			disconnect: z
				.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
				.optional(),
			delete: z
				.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
				.optional(),
			connect: z
				.union([z.lazy(() => SessionWhereUniqueInputSchema), z.lazy(() => SessionWhereUniqueInputSchema).array()])
				.optional(),
			update: z
				.union([
					z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema),
					z.lazy(() => SessionUpdateWithWhereUniqueWithoutUserInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema),
					z.lazy(() => SessionUpdateManyWithWhereWithoutUserInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()])
				.optional(),
		})
		.strict();

export const UserCreateNestedManyWithoutSavedCoinsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateNestedManyWithoutSavedCoinsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutSavedCoinsInputSchema),
					z.lazy(() => UserCreateWithoutSavedCoinsInputSchema).array(),
					z.lazy(() => UserUncheckedCreateWithoutSavedCoinsInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => UserCreateOrConnectWithoutSavedCoinsInputSchema),
					z.lazy(() => UserCreateOrConnectWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export const UserUncheckedCreateNestedManyWithoutSavedCoinsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateNestedManyWithoutSavedCoinsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutSavedCoinsInputSchema),
					z.lazy(() => UserCreateWithoutSavedCoinsInputSchema).array(),
					z.lazy(() => UserUncheckedCreateWithoutSavedCoinsInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => UserCreateOrConnectWithoutSavedCoinsInputSchema),
					z.lazy(() => UserCreateOrConnectWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export const UserUpdateManyWithoutSavedCoinsNestedInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyWithoutSavedCoinsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutSavedCoinsInputSchema),
					z.lazy(() => UserCreateWithoutSavedCoinsInputSchema).array(),
					z.lazy(() => UserUncheckedCreateWithoutSavedCoinsInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => UserCreateOrConnectWithoutSavedCoinsInputSchema),
					z.lazy(() => UserCreateOrConnectWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => UserUpsertWithWhereUniqueWithoutSavedCoinsInputSchema),
					z.lazy(() => UserUpsertWithWhereUniqueWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			set: z
				.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()])
				.optional(),
			disconnect: z
				.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()])
				.optional(),
			delete: z
				.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()])
				.optional(),
			connect: z
				.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()])
				.optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateWithWhereUniqueWithoutSavedCoinsInputSchema),
					z.lazy(() => UserUpdateWithWhereUniqueWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => UserUpdateManyWithWhereWithoutSavedCoinsInputSchema),
					z.lazy(() => UserUpdateManyWithWhereWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([z.lazy(() => UserScalarWhereInputSchema), z.lazy(() => UserScalarWhereInputSchema).array()])
				.optional(),
		})
		.strict();

export const UserUncheckedUpdateManyWithoutSavedCoinsNestedInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateManyWithoutSavedCoinsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => UserCreateWithoutSavedCoinsInputSchema),
					z.lazy(() => UserCreateWithoutSavedCoinsInputSchema).array(),
					z.lazy(() => UserUncheckedCreateWithoutSavedCoinsInputSchema),
					z.lazy(() => UserUncheckedCreateWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => UserCreateOrConnectWithoutSavedCoinsInputSchema),
					z.lazy(() => UserCreateOrConnectWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => UserUpsertWithWhereUniqueWithoutSavedCoinsInputSchema),
					z.lazy(() => UserUpsertWithWhereUniqueWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			set: z
				.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()])
				.optional(),
			disconnect: z
				.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()])
				.optional(),
			delete: z
				.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()])
				.optional(),
			connect: z
				.union([z.lazy(() => UserWhereUniqueInputSchema), z.lazy(() => UserWhereUniqueInputSchema).array()])
				.optional(),
			update: z
				.union([
					z.lazy(() => UserUpdateWithWhereUniqueWithoutSavedCoinsInputSchema),
					z.lazy(() => UserUpdateWithWhereUniqueWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => UserUpdateManyWithWhereWithoutSavedCoinsInputSchema),
					z.lazy(() => UserUpdateManyWithWhereWithoutSavedCoinsInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([z.lazy(() => UserScalarWhereInputSchema), z.lazy(() => UserScalarWhereInputSchema).array()])
				.optional(),
		})
		.strict();

export const NestedStringNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringNullableFilter> = z
	.object({
		equals: z.string().optional().nullable(),
		in: z.string().array().optional().nullable(),
		notIn: z.string().array().optional().nullable(),
		lt: z.string().optional(),
		lte: z.string().optional(),
		gt: z.string().optional(),
		gte: z.string().optional(),
		contains: z.string().optional(),
		startsWith: z.string().optional(),
		endsWith: z.string().optional(),
		not: z
			.union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export const NestedIntNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntNullableFilter> = z
	.object({
		equals: z.number().optional().nullable(),
		in: z.number().array().optional().nullable(),
		notIn: z.number().array().optional().nullable(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z
			.union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export const NestedStringFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringFilter> = z
	.object({
		equals: z.string().optional(),
		in: z.string().array().optional(),
		notIn: z.string().array().optional(),
		lt: z.string().optional(),
		lte: z.string().optional(),
		gt: z.string().optional(),
		gte: z.string().optional(),
		contains: z.string().optional(),
		startsWith: z.string().optional(),
		endsWith: z.string().optional(),
		not: z.union([z.string(), z.lazy(() => NestedStringFilterSchema)]).optional(),
	})
	.strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.string().optional().nullable(),
			in: z.string().array().optional().nullable(),
			notIn: z.string().array().optional().nullable(),
			lt: z.string().optional(),
			lte: z.string().optional(),
			gt: z.string().optional(),
			gte: z.string().optional(),
			contains: z.string().optional(),
			startsWith: z.string().optional(),
			endsWith: z.string().optional(),
			not: z
				.union([z.string(), z.lazy(() => NestedStringNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
		})
		.strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.number().optional().nullable(),
			in: z.number().array().optional().nullable(),
			notIn: z.number().array().optional().nullable(),
			lt: z.number().optional(),
			lte: z.number().optional(),
			gt: z.number().optional(),
			gte: z.number().optional(),
			not: z
				.union([z.number(), z.lazy(() => NestedIntNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
			_sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
		})
		.strict();

export const NestedFloatNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedFloatNullableFilter> = z
	.object({
		equals: z.number().optional().nullable(),
		in: z.number().array().optional().nullable(),
		notIn: z.number().array().optional().nullable(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z
			.union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedStringWithAggregatesFilter> = z
	.object({
		equals: z.string().optional(),
		in: z.string().array().optional(),
		notIn: z.string().array().optional(),
		lt: z.string().optional(),
		lte: z.string().optional(),
		gt: z.string().optional(),
		gte: z.string().optional(),
		contains: z.string().optional(),
		startsWith: z.string().optional(),
		endsWith: z.string().optional(),
		not: z.union([z.string(), z.lazy(() => NestedStringWithAggregatesFilterSchema)]).optional(),
		_count: z.lazy(() => NestedIntFilterSchema).optional(),
		_min: z.lazy(() => NestedStringFilterSchema).optional(),
		_max: z.lazy(() => NestedStringFilterSchema).optional(),
	})
	.strict();

export const NestedIntFilterSchema: z.ZodType<PrismaClient.Prisma.NestedIntFilter> = z
	.object({
		equals: z.number().optional(),
		in: z.number().array().optional(),
		notIn: z.number().array().optional(),
		lt: z.number().optional(),
		lte: z.number().optional(),
		gt: z.number().optional(),
		gte: z.number().optional(),
		not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
	})
	.strict();

export const NestedDateTimeFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeFilter> = z
	.object({
		equals: z.date().optional(),
		in: z.date().array().optional(),
		notIn: z.date().array().optional(),
		lt: z.date().optional(),
		lte: z.date().optional(),
		gt: z.date().optional(),
		gte: z.date().optional(),
		not: z.union([z.date(), z.lazy(() => NestedDateTimeFilterSchema)]).optional(),
	})
	.strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeWithAggregatesFilter> =
	z
		.object({
			equals: z.date().optional(),
			in: z.date().array().optional(),
			notIn: z.date().array().optional(),
			lt: z.date().optional(),
			lte: z.date().optional(),
			gt: z.date().optional(),
			gte: z.date().optional(),
			not: z.union([z.date(), z.lazy(() => NestedDateTimeWithAggregatesFilterSchema)]).optional(),
			_count: z.lazy(() => NestedIntFilterSchema).optional(),
			_min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
			_max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
		})
		.strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeNullableFilter> = z
	.object({
		equals: z.date().optional().nullable(),
		in: z.date().array().optional().nullable(),
		notIn: z.date().array().optional().nullable(),
		lt: z.date().optional(),
		lte: z.date().optional(),
		gt: z.date().optional(),
		gte: z.date().optional(),
		not: z
			.union([z.date(), z.lazy(() => NestedDateTimeNullableFilterSchema)])
			.optional()
			.nullable(),
	})
	.strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<PrismaClient.Prisma.NestedDateTimeNullableWithAggregatesFilter> =
	z
		.object({
			equals: z.date().optional().nullable(),
			in: z.date().array().optional().nullable(),
			notIn: z.date().array().optional().nullable(),
			lt: z.date().optional(),
			lte: z.date().optional(),
			gt: z.date().optional(),
			gte: z.date().optional(),
			not: z
				.union([z.date(), z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema)])
				.optional()
				.nullable(),
			_count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
			_min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
			_max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
		})
		.strict();

export const UserCreateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateWithoutAccountsInput> = z
	.object({
		email: z.string().optional().nullable(),
		emailVerified: z.date().optional().nullable(),
		id: z.string().optional(),
		image: z.string().optional().nullable(),
		name: z.string().optional().nullable(),
		savedCoins: z.lazy(() => SavedCoinCreateNestedManyWithoutUsersInputSchema).optional(),
		sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
	})
	.strict();

export const UserUncheckedCreateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateWithoutAccountsInput> =
	z
		.object({
			email: z.string().optional().nullable(),
			emailVerified: z.date().optional().nullable(),
			id: z.string().optional(),
			image: z.string().optional().nullable(),
			name: z.string().optional().nullable(),
			savedCoins: z.lazy(() => SavedCoinUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
			sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
		})
		.strict();

export const UserCreateOrConnectWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateOrConnectWithoutAccountsInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UserCreateWithoutAccountsInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
			]),
		})
		.strict();

export const UserUpsertWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpsertWithoutAccountsInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutAccountsInputSchema),
			z.lazy(() => UserUncheckedUpdateWithoutAccountsInputSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutAccountsInputSchema),
			z.lazy(() => UserUncheckedCreateWithoutAccountsInputSchema),
		]),
	})
	.strict();

export const UserUpdateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateWithoutAccountsInput> = z
	.object({
		email: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		emailVerified: z
			.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		image: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		name: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		savedCoins: z.lazy(() => SavedCoinUpdateManyWithoutUsersNestedInputSchema).optional(),
		sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
	})
	.strict();

export const UserUncheckedUpdateWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateWithoutAccountsInput> =
	z
		.object({
			email: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			emailVerified: z
				.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			image: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			name: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			savedCoins: z.lazy(() => SavedCoinUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
			sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
		})
		.strict();

export const UserCreateWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateWithoutSessionsInput> = z
	.object({
		accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
		email: z.string().optional().nullable(),
		emailVerified: z.date().optional().nullable(),
		id: z.string().optional(),
		image: z.string().optional().nullable(),
		name: z.string().optional().nullable(),
		savedCoins: z.lazy(() => SavedCoinCreateNestedManyWithoutUsersInputSchema).optional(),
	})
	.strict();

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateWithoutSessionsInput> =
	z
		.object({
			accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			email: z.string().optional().nullable(),
			emailVerified: z.date().optional().nullable(),
			id: z.string().optional(),
			image: z.string().optional().nullable(),
			name: z.string().optional().nullable(),
			savedCoins: z.lazy(() => SavedCoinUncheckedCreateNestedManyWithoutUsersInputSchema).optional(),
		})
		.strict();

export const UserCreateOrConnectWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateOrConnectWithoutSessionsInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UserCreateWithoutSessionsInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
			]),
		})
		.strict();

export const UserUpsertWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpsertWithoutSessionsInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutSessionsInputSchema),
			z.lazy(() => UserUncheckedUpdateWithoutSessionsInputSchema),
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutSessionsInputSchema),
			z.lazy(() => UserUncheckedCreateWithoutSessionsInputSchema),
		]),
	})
	.strict();

export const UserUpdateWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateWithoutSessionsInput> = z
	.object({
		accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
		email: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		emailVerified: z
			.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		image: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		name: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		savedCoins: z.lazy(() => SavedCoinUpdateManyWithoutUsersNestedInputSchema).optional(),
	})
	.strict();

export const UserUncheckedUpdateWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateWithoutSessionsInput> =
	z
		.object({
			accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			email: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			emailVerified: z
				.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			image: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			name: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			savedCoins: z.lazy(() => SavedCoinUncheckedUpdateManyWithoutUsersNestedInputSchema).optional(),
		})
		.strict();

export const AccountCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateWithoutUserInput> = z
	.object({
		access_token: z.string().optional().nullable(),
		expires_at: z.number().optional().nullable(),
		id: z.string().optional(),
		id_token: z.string().optional().nullable(),
		provider: z.string(),
		providerAccountId: z.string(),
		refresh_token: z.string().optional().nullable(),
		scope: z.string().optional().nullable(),
		session_state: z.string().optional().nullable(),
		token_type: z.string().optional().nullable(),
		type: z.string(),
	})
	.strict();

export const AccountUncheckedCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedCreateWithoutUserInput> =
	z
		.object({
			access_token: z.string().optional().nullable(),
			expires_at: z.number().optional().nullable(),
			id: z.string().optional(),
			id_token: z.string().optional().nullable(),
			provider: z.string(),
			providerAccountId: z.string(),
			refresh_token: z.string().optional().nullable(),
			scope: z.string().optional().nullable(),
			session_state: z.string().optional().nullable(),
			token_type: z.string().optional().nullable(),
			type: z.string(),
		})
		.strict();

export const AccountCreateOrConnectWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => AccountWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => AccountCreateWithoutUserInputSchema),
				z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export const AccountCreateManyUserInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.lazy(() => AccountCreateManyUserInputSchema).array(),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export const SavedCoinCreateWithoutUsersInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinCreateWithoutUsersInput> = z
	.object({
		id: z.string(),
	})
	.strict();

export const SavedCoinUncheckedCreateWithoutUsersInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUncheckedCreateWithoutUsersInput> =
	z
		.object({
			id: z.string(),
		})
		.strict();

export const SavedCoinCreateOrConnectWithoutUsersInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinCreateOrConnectWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => SavedCoinWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => SavedCoinCreateWithoutUsersInputSchema),
				z.lazy(() => SavedCoinUncheckedCreateWithoutUsersInputSchema),
			]),
		})
		.strict();

export const SessionCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateWithoutUserInput> = z
	.object({
		expires: z.date(),
		id: z.string().optional(),
		sessionToken: z.string(),
	})
	.strict();

export const SessionUncheckedCreateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedCreateWithoutUserInput> =
	z
		.object({
			expires: z.date(),
			id: z.string().optional(),
			sessionToken: z.string(),
		})
		.strict();

export const SessionCreateOrConnectWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateOrConnectWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => SessionWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => SessionCreateWithoutUserInputSchema),
				z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export const SessionCreateManyUserInputEnvelopeSchema: z.ZodType<PrismaClient.Prisma.SessionCreateManyUserInputEnvelope> =
	z
		.object({
			data: z.lazy(() => SessionCreateManyUserInputSchema).array(),
			skipDuplicates: z.boolean().optional(),
		})
		.strict();

export const AccountUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => AccountWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => AccountUpdateWithoutUserInputSchema),
				z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => AccountCreateWithoutUserInputSchema),
				z.lazy(() => AccountUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export const AccountUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => AccountWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => AccountUpdateWithoutUserInputSchema),
				z.lazy(() => AccountUncheckedUpdateWithoutUserInputSchema),
			]),
		})
		.strict();

export const AccountUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => AccountScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => AccountUpdateManyMutationInputSchema),
				z.lazy(() => AccountUncheckedUpdateManyWithoutAccountsInputSchema),
			]),
		})
		.strict();

export const AccountScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.AccountScalarWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => AccountScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => AccountScalarWhereInputSchema), z.lazy(() => AccountScalarWhereInputSchema).array()])
			.optional(),
		access_token: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		expires_at: z
			.union([z.lazy(() => IntNullableFilterSchema), z.number()])
			.optional()
			.nullable(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		id_token: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		provider: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		providerAccountId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		refresh_token: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		scope: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		session_state: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		token_type: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
	})
	.strict();

export const SavedCoinUpsertWithWhereUniqueWithoutUsersInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUpsertWithWhereUniqueWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => SavedCoinWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => SavedCoinUpdateWithoutUsersInputSchema),
				z.lazy(() => SavedCoinUncheckedUpdateWithoutUsersInputSchema),
			]),
			create: z.union([
				z.lazy(() => SavedCoinCreateWithoutUsersInputSchema),
				z.lazy(() => SavedCoinUncheckedCreateWithoutUsersInputSchema),
			]),
		})
		.strict();

export const SavedCoinUpdateWithWhereUniqueWithoutUsersInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUpdateWithWhereUniqueWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => SavedCoinWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => SavedCoinUpdateWithoutUsersInputSchema),
				z.lazy(() => SavedCoinUncheckedUpdateWithoutUsersInputSchema),
			]),
		})
		.strict();

export const SavedCoinUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUpdateManyWithWhereWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => SavedCoinScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => SavedCoinUpdateManyMutationInputSchema),
				z.lazy(() => SavedCoinUncheckedUpdateManyWithoutSavedCoinsInputSchema),
			]),
		})
		.strict();

export const SavedCoinScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinScalarWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => SavedCoinScalarWhereInputSchema), z.lazy(() => SavedCoinScalarWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => SavedCoinScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => SavedCoinScalarWhereInputSchema), z.lazy(() => SavedCoinScalarWhereInputSchema).array()])
			.optional(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
	})
	.strict();

export const SessionUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpsertWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => SessionWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => SessionUpdateWithoutUserInputSchema),
				z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema),
			]),
			create: z.union([
				z.lazy(() => SessionCreateWithoutUserInputSchema),
				z.lazy(() => SessionUncheckedCreateWithoutUserInputSchema),
			]),
		})
		.strict();

export const SessionUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateWithWhereUniqueWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => SessionWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => SessionUpdateWithoutUserInputSchema),
				z.lazy(() => SessionUncheckedUpdateWithoutUserInputSchema),
			]),
		})
		.strict();

export const SessionUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateManyWithWhereWithoutUserInput> =
	z
		.object({
			where: z.lazy(() => SessionScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => SessionUpdateManyMutationInputSchema),
				z.lazy(() => SessionUncheckedUpdateManyWithoutSessionsInputSchema),
			]),
		})
		.strict();

export const SessionScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.SessionScalarWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => SessionScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => SessionScalarWhereInputSchema), z.lazy(() => SessionScalarWhereInputSchema).array()])
			.optional(),
		expires: z.union([z.lazy(() => DateTimeFilterSchema), z.date()]).optional(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		sessionToken: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
	})
	.strict();

export const UserCreateWithoutSavedCoinsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateWithoutSavedCoinsInput> = z
	.object({
		accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
		email: z.string().optional().nullable(),
		emailVerified: z.date().optional().nullable(),
		id: z.string().optional(),
		image: z.string().optional().nullable(),
		name: z.string().optional().nullable(),
		sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
	})
	.strict();

export const UserUncheckedCreateWithoutSavedCoinsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedCreateWithoutSavedCoinsInput> =
	z
		.object({
			accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
			email: z.string().optional().nullable(),
			emailVerified: z.date().optional().nullable(),
			id: z.string().optional(),
			image: z.string().optional().nullable(),
			name: z.string().optional().nullable(),
			sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
		})
		.strict();

export const UserCreateOrConnectWithoutSavedCoinsInputSchema: z.ZodType<PrismaClient.Prisma.UserCreateOrConnectWithoutSavedCoinsInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => UserCreateWithoutSavedCoinsInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutSavedCoinsInputSchema),
			]),
		})
		.strict();

export const UserUpsertWithWhereUniqueWithoutSavedCoinsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpsertWithWhereUniqueWithoutSavedCoinsInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => UserUpdateWithoutSavedCoinsInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutSavedCoinsInputSchema),
			]),
			create: z.union([
				z.lazy(() => UserCreateWithoutSavedCoinsInputSchema),
				z.lazy(() => UserUncheckedCreateWithoutSavedCoinsInputSchema),
			]),
		})
		.strict();

export const UserUpdateWithWhereUniqueWithoutSavedCoinsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateWithWhereUniqueWithoutSavedCoinsInput> =
	z
		.object({
			where: z.lazy(() => UserWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => UserUpdateWithoutSavedCoinsInputSchema),
				z.lazy(() => UserUncheckedUpdateWithoutSavedCoinsInputSchema),
			]),
		})
		.strict();

export const UserUpdateManyWithWhereWithoutSavedCoinsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyWithWhereWithoutSavedCoinsInput> =
	z
		.object({
			where: z.lazy(() => UserScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => UserUpdateManyMutationInputSchema),
				z.lazy(() => UserUncheckedUpdateManyWithoutUsersInputSchema),
			]),
		})
		.strict();

export const UserScalarWhereInputSchema: z.ZodType<PrismaClient.Prisma.UserScalarWhereInput> = z
	.object({
		AND: z
			.union([z.lazy(() => UserScalarWhereInputSchema), z.lazy(() => UserScalarWhereInputSchema).array()])
			.optional(),
		OR: z
			.lazy(() => UserScalarWhereInputSchema)
			.array()
			.optional(),
		NOT: z
			.union([z.lazy(() => UserScalarWhereInputSchema), z.lazy(() => UserScalarWhereInputSchema).array()])
			.optional(),
		email: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		emailVerified: z
			.union([z.lazy(() => DateTimeNullableFilterSchema), z.date()])
			.optional()
			.nullable(),
		id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
		image: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
		name: z
			.union([z.lazy(() => StringNullableFilterSchema), z.string()])
			.optional()
			.nullable(),
	})
	.strict();

export const AccountCreateManyUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyUserInput> = z
	.object({
		access_token: z.string().optional().nullable(),
		expires_at: z.number().int().optional().nullable(),
		id: z.string().cuid().optional(),
		id_token: z.string().optional().nullable(),
		provider: z.string(),
		providerAccountId: z.string(),
		refresh_token: z.string().optional().nullable(),
		scope: z.string().optional().nullable(),
		session_state: z.string().optional().nullable(),
		token_type: z.string().optional().nullable(),
		type: z.string(),
	})
	.strict();

export const SessionCreateManyUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionCreateManyUserInput> = z
	.object({
		expires: z.date(),
		id: z.string().cuid().optional(),
		sessionToken: z.string(),
	})
	.strict();

export const AccountUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateWithoutUserInput> = z
	.object({
		access_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		expires_at: z
			.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		id_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		refresh_token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		scope: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		session_state: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		token_type: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export const AccountUncheckedUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateWithoutUserInput> =
	z
		.object({
			access_token: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			expires_at: z
				.union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			id_token: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			refresh_token: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			scope: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			session_state: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			token_type: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export const AccountUncheckedUpdateManyWithoutAccountsInputSchema: z.ZodType<PrismaClient.Prisma.AccountUncheckedUpdateManyWithoutAccountsInput> =
	z
		.object({
			access_token: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			expires_at: z
				.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			id_token: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			provider: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			providerAccountId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			refresh_token: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			scope: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			session_state: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			token_type: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export const SavedCoinUpdateWithoutUsersInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUpdateWithoutUsersInput> = z
	.object({
		id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export const SavedCoinUncheckedUpdateWithoutUsersInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUncheckedUpdateWithoutUsersInput> =
	z
		.object({
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export const SavedCoinUncheckedUpdateManyWithoutSavedCoinsInputSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUncheckedUpdateManyWithoutSavedCoinsInput> =
	z
		.object({
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export const SessionUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateWithoutUserInput> = z
	.object({
		expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
		id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
	})
	.strict();

export const SessionUncheckedUpdateWithoutUserInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedUpdateWithoutUserInput> =
	z
		.object({
			expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export const SessionUncheckedUpdateManyWithoutSessionsInputSchema: z.ZodType<PrismaClient.Prisma.SessionUncheckedUpdateManyWithoutSessionsInput> =
	z
		.object({
			expires: z.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			sessionToken: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		})
		.strict();

export const UserUpdateWithoutSavedCoinsInputSchema: z.ZodType<PrismaClient.Prisma.UserUpdateWithoutSavedCoinsInput> = z
	.object({
		accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputSchema).optional(),
		email: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		emailVerified: z
			.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
		image: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		name: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
			.optional()
			.nullable(),
		sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputSchema).optional(),
	})
	.strict();

export const UserUncheckedUpdateWithoutSavedCoinsInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateWithoutSavedCoinsInput> =
	z
		.object({
			accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
			email: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			emailVerified: z
				.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			image: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			name: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
		})
		.strict();

export const UserUncheckedUpdateManyWithoutUsersInputSchema: z.ZodType<PrismaClient.Prisma.UserUncheckedUpdateManyWithoutUsersInput> =
	z
		.object({
			email: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			emailVerified: z
				.union([z.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			id: z.union([z.string().cuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			image: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			name: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
		})
		.strict();

/// //////////////////////////////////////
// ARGS
/// //////////////////////////////////////

export const AccountFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindFirstArgs> = z
	.object({
		select: AccountSelectSchema.optional(),
		include: AccountIncludeSchema.optional(),
		where: AccountWhereInputSchema.optional(),
		orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
		cursor: AccountWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: AccountScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const AccountFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindFirstOrThrowArgs> = z
	.object({
		select: AccountSelectSchema.optional(),
		include: AccountIncludeSchema.optional(),
		where: AccountWhereInputSchema.optional(),
		orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
		cursor: AccountWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: AccountScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const AccountFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindManyArgs> = z
	.object({
		select: AccountSelectSchema.optional(),
		include: AccountIncludeSchema.optional(),
		where: AccountWhereInputSchema.optional(),
		orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
		cursor: AccountWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: AccountScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const AccountAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountAggregateArgs> = z
	.object({
		select: AccountSelectSchema.optional(),
		include: AccountIncludeSchema.optional(),
		where: AccountWhereInputSchema.optional(),
		orderBy: z.union([AccountOrderByWithRelationInputSchema.array(), AccountOrderByWithRelationInputSchema]).optional(),
		cursor: AccountWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export const AccountGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.AccountGroupByArgs> = z
	.object({
		select: AccountSelectSchema.optional(),
		include: AccountIncludeSchema.optional(),
		where: AccountWhereInputSchema.optional(),
		orderBy: z
			.union([AccountOrderByWithAggregationInputSchema.array(), AccountOrderByWithAggregationInputSchema])
			.optional(),
		by: AccountScalarFieldEnumSchema.array(),
		having: AccountScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export const AccountFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindUniqueArgs> = z
	.object({
		select: AccountSelectSchema.optional(),
		include: AccountIncludeSchema.optional(),
		where: AccountWhereUniqueInputSchema,
	})
	.strict();

export const AccountFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.AccountFindUniqueOrThrowArgs> = z
	.object({
		select: AccountSelectSchema.optional(),
		include: AccountIncludeSchema.optional(),
		where: AccountWhereUniqueInputSchema,
	})
	.strict();

export const SessionFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.SessionFindFirstArgs> = z
	.object({
		select: SessionSelectSchema.optional(),
		include: SessionIncludeSchema.optional(),
		where: SessionWhereInputSchema.optional(),
		orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
		cursor: SessionWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: SessionScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const SessionFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.SessionFindFirstOrThrowArgs> = z
	.object({
		select: SessionSelectSchema.optional(),
		include: SessionIncludeSchema.optional(),
		where: SessionWhereInputSchema.optional(),
		orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
		cursor: SessionWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: SessionScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const SessionFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.SessionFindManyArgs> = z
	.object({
		select: SessionSelectSchema.optional(),
		include: SessionIncludeSchema.optional(),
		where: SessionWhereInputSchema.optional(),
		orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
		cursor: SessionWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: SessionScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const SessionAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.SessionAggregateArgs> = z
	.object({
		select: SessionSelectSchema.optional(),
		include: SessionIncludeSchema.optional(),
		where: SessionWhereInputSchema.optional(),
		orderBy: z.union([SessionOrderByWithRelationInputSchema.array(), SessionOrderByWithRelationInputSchema]).optional(),
		cursor: SessionWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export const SessionGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.SessionGroupByArgs> = z
	.object({
		select: SessionSelectSchema.optional(),
		include: SessionIncludeSchema.optional(),
		where: SessionWhereInputSchema.optional(),
		orderBy: z
			.union([SessionOrderByWithAggregationInputSchema.array(), SessionOrderByWithAggregationInputSchema])
			.optional(),
		by: SessionScalarFieldEnumSchema.array(),
		having: SessionScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export const SessionFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.SessionFindUniqueArgs> = z
	.object({
		select: SessionSelectSchema.optional(),
		include: SessionIncludeSchema.optional(),
		where: SessionWhereUniqueInputSchema,
	})
	.strict();

export const SessionFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.SessionFindUniqueOrThrowArgs> = z
	.object({
		select: SessionSelectSchema.optional(),
		include: SessionIncludeSchema.optional(),
		where: SessionWhereUniqueInputSchema,
	})
	.strict();

export const UserFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindFirstArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: UserIncludeSchema.optional(),
		where: UserWhereInputSchema.optional(),
		orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
		cursor: UserWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: UserScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindFirstOrThrowArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: UserIncludeSchema.optional(),
		where: UserWhereInputSchema.optional(),
		orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
		cursor: UserWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: UserScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const UserFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindManyArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: UserIncludeSchema.optional(),
		where: UserWhereInputSchema.optional(),
		orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
		cursor: UserWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: UserScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const UserAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.UserAggregateArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: UserIncludeSchema.optional(),
		where: UserWhereInputSchema.optional(),
		orderBy: z.union([UserOrderByWithRelationInputSchema.array(), UserOrderByWithRelationInputSchema]).optional(),
		cursor: UserWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export const UserGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.UserGroupByArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: UserIncludeSchema.optional(),
		where: UserWhereInputSchema.optional(),
		orderBy: z.union([UserOrderByWithAggregationInputSchema.array(), UserOrderByWithAggregationInputSchema]).optional(),
		by: UserScalarFieldEnumSchema.array(),
		having: UserScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export const UserFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindUniqueArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: UserIncludeSchema.optional(),
		where: UserWhereUniqueInputSchema,
	})
	.strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.UserFindUniqueOrThrowArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: UserIncludeSchema.optional(),
		where: UserWhereUniqueInputSchema,
	})
	.strict();

export const VerificationTokenFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenFindFirstArgs> = z
	.object({
		select: VerificationTokenSelectSchema.optional(),
		where: VerificationTokenWhereInputSchema.optional(),
		orderBy: z
			.union([VerificationTokenOrderByWithRelationInputSchema.array(), VerificationTokenOrderByWithRelationInputSchema])
			.optional(),
		cursor: VerificationTokenWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const VerificationTokenFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenFindFirstOrThrowArgs> =
	z
		.object({
			select: VerificationTokenSelectSchema.optional(),
			where: VerificationTokenWhereInputSchema.optional(),
			orderBy: z
				.union([
					VerificationTokenOrderByWithRelationInputSchema.array(),
					VerificationTokenOrderByWithRelationInputSchema,
				])
				.optional(),
			cursor: VerificationTokenWhereUniqueInputSchema.optional(),
			take: z.number().optional(),
			skip: z.number().optional(),
			distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
		})
		.strict();

export const VerificationTokenFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenFindManyArgs> = z
	.object({
		select: VerificationTokenSelectSchema.optional(),
		where: VerificationTokenWhereInputSchema.optional(),
		orderBy: z
			.union([VerificationTokenOrderByWithRelationInputSchema.array(), VerificationTokenOrderByWithRelationInputSchema])
			.optional(),
		cursor: VerificationTokenWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: VerificationTokenScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const VerificationTokenAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenAggregateArgs> = z
	.object({
		select: VerificationTokenSelectSchema.optional(),
		where: VerificationTokenWhereInputSchema.optional(),
		orderBy: z
			.union([VerificationTokenOrderByWithRelationInputSchema.array(), VerificationTokenOrderByWithRelationInputSchema])
			.optional(),
		cursor: VerificationTokenWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export const VerificationTokenGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenGroupByArgs> = z
	.object({
		select: VerificationTokenSelectSchema.optional(),
		where: VerificationTokenWhereInputSchema.optional(),
		orderBy: z
			.union([
				VerificationTokenOrderByWithAggregationInputSchema.array(),
				VerificationTokenOrderByWithAggregationInputSchema,
			])
			.optional(),
		by: VerificationTokenScalarFieldEnumSchema.array(),
		having: VerificationTokenScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export const VerificationTokenFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenFindUniqueArgs> = z
	.object({
		select: VerificationTokenSelectSchema.optional(),
		where: VerificationTokenWhereUniqueInputSchema,
	})
	.strict();

export const VerificationTokenFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenFindUniqueOrThrowArgs> =
	z
		.object({
			select: VerificationTokenSelectSchema.optional(),
			where: VerificationTokenWhereUniqueInputSchema,
		})
		.strict();

export const SavedCoinFindFirstArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinFindFirstArgs> = z
	.object({
		select: SavedCoinSelectSchema.optional(),
		include: SavedCoinIncludeSchema.optional(),
		where: SavedCoinWhereInputSchema.optional(),
		orderBy: z
			.union([SavedCoinOrderByWithRelationInputSchema.array(), SavedCoinOrderByWithRelationInputSchema])
			.optional(),
		cursor: SavedCoinWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: SavedCoinScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const SavedCoinFindFirstOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinFindFirstOrThrowArgs> = z
	.object({
		select: SavedCoinSelectSchema.optional(),
		include: SavedCoinIncludeSchema.optional(),
		where: SavedCoinWhereInputSchema.optional(),
		orderBy: z
			.union([SavedCoinOrderByWithRelationInputSchema.array(), SavedCoinOrderByWithRelationInputSchema])
			.optional(),
		cursor: SavedCoinWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: SavedCoinScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const SavedCoinFindManyArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinFindManyArgs> = z
	.object({
		select: SavedCoinSelectSchema.optional(),
		include: SavedCoinIncludeSchema.optional(),
		where: SavedCoinWhereInputSchema.optional(),
		orderBy: z
			.union([SavedCoinOrderByWithRelationInputSchema.array(), SavedCoinOrderByWithRelationInputSchema])
			.optional(),
		cursor: SavedCoinWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: SavedCoinScalarFieldEnumSchema.array().optional(),
	})
	.strict();

export const SavedCoinAggregateArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinAggregateArgs> = z
	.object({
		select: SavedCoinSelectSchema.optional(),
		include: SavedCoinIncludeSchema.optional(),
		where: SavedCoinWhereInputSchema.optional(),
		orderBy: z
			.union([SavedCoinOrderByWithRelationInputSchema.array(), SavedCoinOrderByWithRelationInputSchema])
			.optional(),
		cursor: SavedCoinWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export const SavedCoinGroupByArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinGroupByArgs> = z
	.object({
		select: SavedCoinSelectSchema.optional(),
		include: SavedCoinIncludeSchema.optional(),
		where: SavedCoinWhereInputSchema.optional(),
		orderBy: z
			.union([SavedCoinOrderByWithAggregationInputSchema.array(), SavedCoinOrderByWithAggregationInputSchema])
			.optional(),
		by: SavedCoinScalarFieldEnumSchema.array(),
		having: SavedCoinScalarWhereWithAggregatesInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
	})
	.strict();

export const SavedCoinFindUniqueArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinFindUniqueArgs> = z
	.object({
		select: SavedCoinSelectSchema.optional(),
		include: SavedCoinIncludeSchema.optional(),
		where: SavedCoinWhereUniqueInputSchema,
	})
	.strict();

export const SavedCoinFindUniqueOrThrowArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinFindUniqueOrThrowArgs> = z
	.object({
		select: SavedCoinSelectSchema.optional(),
		include: SavedCoinIncludeSchema.optional(),
		where: SavedCoinWhereUniqueInputSchema,
	})
	.strict();

export const AccountCreateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountCreateArgs> = z
	.object({
		select: AccountSelectSchema.optional(),
		include: AccountIncludeSchema.optional(),
		data: z.union([AccountCreateInputSchema, AccountUncheckedCreateInputSchema]),
	})
	.strict();

export const AccountUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpsertArgs> = z
	.object({
		select: AccountSelectSchema.optional(),
		include: AccountIncludeSchema.optional(),
		where: AccountWhereUniqueInputSchema,
		create: z.union([AccountCreateInputSchema, AccountUncheckedCreateInputSchema]),
		update: z.union([AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema]),
	})
	.strict();

export const AccountCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountCreateManyArgs> = z
	.object({
		data: AccountCreateManyInputSchema.array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export const AccountDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.AccountDeleteArgs> = z
	.object({
		select: AccountSelectSchema.optional(),
		include: AccountIncludeSchema.optional(),
		where: AccountWhereUniqueInputSchema,
	})
	.strict();

export const AccountUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateArgs> = z
	.object({
		select: AccountSelectSchema.optional(),
		include: AccountIncludeSchema.optional(),
		data: z.union([AccountUpdateInputSchema, AccountUncheckedUpdateInputSchema]),
		where: AccountWhereUniqueInputSchema,
	})
	.strict();

export const AccountUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountUpdateManyArgs> = z
	.object({
		data: z.union([AccountUpdateManyMutationInputSchema, AccountUncheckedUpdateManyInputSchema]),
		where: AccountWhereInputSchema.optional(),
	})
	.strict();

export const AccountDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.AccountDeleteManyArgs> = z
	.object({
		where: AccountWhereInputSchema.optional(),
	})
	.strict();

export const SessionCreateArgsSchema: z.ZodType<PrismaClient.Prisma.SessionCreateArgs> = z
	.object({
		select: SessionSelectSchema.optional(),
		include: SessionIncludeSchema.optional(),
		data: z.union([SessionCreateInputSchema, SessionUncheckedCreateInputSchema]),
	})
	.strict();

export const SessionUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.SessionUpsertArgs> = z
	.object({
		select: SessionSelectSchema.optional(),
		include: SessionIncludeSchema.optional(),
		where: SessionWhereUniqueInputSchema,
		create: z.union([SessionCreateInputSchema, SessionUncheckedCreateInputSchema]),
		update: z.union([SessionUpdateInputSchema, SessionUncheckedUpdateInputSchema]),
	})
	.strict();

export const SessionCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.SessionCreateManyArgs> = z
	.object({
		data: SessionCreateManyInputSchema.array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export const SessionDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.SessionDeleteArgs> = z
	.object({
		select: SessionSelectSchema.optional(),
		include: SessionIncludeSchema.optional(),
		where: SessionWhereUniqueInputSchema,
	})
	.strict();

export const SessionUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateArgs> = z
	.object({
		select: SessionSelectSchema.optional(),
		include: SessionIncludeSchema.optional(),
		data: z.union([SessionUpdateInputSchema, SessionUncheckedUpdateInputSchema]),
		where: SessionWhereUniqueInputSchema,
	})
	.strict();

export const SessionUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.SessionUpdateManyArgs> = z
	.object({
		data: z.union([SessionUpdateManyMutationInputSchema, SessionUncheckedUpdateManyInputSchema]),
		where: SessionWhereInputSchema.optional(),
	})
	.strict();

export const SessionDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.SessionDeleteManyArgs> = z
	.object({
		where: SessionWhereInputSchema.optional(),
	})
	.strict();

export const UserCreateArgsSchema: z.ZodType<PrismaClient.Prisma.UserCreateArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: UserIncludeSchema.optional(),
		data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
	})
	.strict();

export const UserUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpsertArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: UserIncludeSchema.optional(),
		where: UserWhereUniqueInputSchema,
		create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
		update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
	})
	.strict();

export const UserCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserCreateManyArgs> = z
	.object({
		data: UserCreateManyInputSchema.array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export const UserDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.UserDeleteArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: UserIncludeSchema.optional(),
		where: UserWhereUniqueInputSchema,
	})
	.strict();

export const UserUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpdateArgs> = z
	.object({
		select: UserSelectSchema.optional(),
		include: UserIncludeSchema.optional(),
		data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
		where: UserWhereUniqueInputSchema,
	})
	.strict();

export const UserUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserUpdateManyArgs> = z
	.object({
		data: z.union([UserUpdateManyMutationInputSchema, UserUncheckedUpdateManyInputSchema]),
		where: UserWhereInputSchema.optional(),
	})
	.strict();

export const UserDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.UserDeleteManyArgs> = z
	.object({
		where: UserWhereInputSchema.optional(),
	})
	.strict();

export const VerificationTokenCreateArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenCreateArgs> = z
	.object({
		select: VerificationTokenSelectSchema.optional(),
		data: z.union([VerificationTokenCreateInputSchema, VerificationTokenUncheckedCreateInputSchema]),
	})
	.strict();

export const VerificationTokenUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUpsertArgs> = z
	.object({
		select: VerificationTokenSelectSchema.optional(),
		where: VerificationTokenWhereUniqueInputSchema,
		create: z.union([VerificationTokenCreateInputSchema, VerificationTokenUncheckedCreateInputSchema]),
		update: z.union([VerificationTokenUpdateInputSchema, VerificationTokenUncheckedUpdateInputSchema]),
	})
	.strict();

export const VerificationTokenCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenCreateManyArgs> = z
	.object({
		data: VerificationTokenCreateManyInputSchema.array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export const VerificationTokenDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenDeleteArgs> = z
	.object({
		select: VerificationTokenSelectSchema.optional(),
		where: VerificationTokenWhereUniqueInputSchema,
	})
	.strict();

export const VerificationTokenUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUpdateArgs> = z
	.object({
		select: VerificationTokenSelectSchema.optional(),
		data: z.union([VerificationTokenUpdateInputSchema, VerificationTokenUncheckedUpdateInputSchema]),
		where: VerificationTokenWhereUniqueInputSchema,
	})
	.strict();

export const VerificationTokenUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenUpdateManyArgs> = z
	.object({
		data: z.union([VerificationTokenUpdateManyMutationInputSchema, VerificationTokenUncheckedUpdateManyInputSchema]),
		where: VerificationTokenWhereInputSchema.optional(),
	})
	.strict();

export const VerificationTokenDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.VerificationTokenDeleteManyArgs> = z
	.object({
		where: VerificationTokenWhereInputSchema.optional(),
	})
	.strict();

export const SavedCoinCreateArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinCreateArgs> = z
	.object({
		select: SavedCoinSelectSchema.optional(),
		include: SavedCoinIncludeSchema.optional(),
		data: z.union([SavedCoinCreateInputSchema, SavedCoinUncheckedCreateInputSchema]),
	})
	.strict();

export const SavedCoinUpsertArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUpsertArgs> = z
	.object({
		select: SavedCoinSelectSchema.optional(),
		include: SavedCoinIncludeSchema.optional(),
		where: SavedCoinWhereUniqueInputSchema,
		create: z.union([SavedCoinCreateInputSchema, SavedCoinUncheckedCreateInputSchema]),
		update: z.union([SavedCoinUpdateInputSchema, SavedCoinUncheckedUpdateInputSchema]),
	})
	.strict();

export const SavedCoinCreateManyArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinCreateManyArgs> = z
	.object({
		data: SavedCoinCreateManyInputSchema.array(),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export const SavedCoinDeleteArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinDeleteArgs> = z
	.object({
		select: SavedCoinSelectSchema.optional(),
		include: SavedCoinIncludeSchema.optional(),
		where: SavedCoinWhereUniqueInputSchema,
	})
	.strict();

export const SavedCoinUpdateArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUpdateArgs> = z
	.object({
		select: SavedCoinSelectSchema.optional(),
		include: SavedCoinIncludeSchema.optional(),
		data: z.union([SavedCoinUpdateInputSchema, SavedCoinUncheckedUpdateInputSchema]),
		where: SavedCoinWhereUniqueInputSchema,
	})
	.strict();

export const SavedCoinUpdateManyArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinUpdateManyArgs> = z
	.object({
		data: z.union([SavedCoinUpdateManyMutationInputSchema, SavedCoinUncheckedUpdateManyInputSchema]),
		where: SavedCoinWhereInputSchema.optional(),
	})
	.strict();

export const SavedCoinDeleteManyArgsSchema: z.ZodType<PrismaClient.Prisma.SavedCoinDeleteManyArgs> = z
	.object({
		where: SavedCoinWhereInputSchema.optional(),
	})
	.strict();
