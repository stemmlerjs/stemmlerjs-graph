import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};

export type Album = {
   __typename?: 'Album',
  name: Scalars['String'],
  releaseDate: Scalars['String'],
  image: Scalars['String'],
};

export type Artist = {
   __typename?: 'Artist',
  name: Scalars['String'],
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CurrentSongPlayingResult = {
   __typename?: 'CurrentSongPlayingResult',
  album: Album,
  artist: Artist,
  title: Scalars['String'],
  previewUrl: Scalars['String'],
  externalUrl: Scalars['String'],
  trackLengthMilliseconds: Scalars['Float'],
  currentProgress: Scalars['Float'],
  isCurrentlyPlaying: Scalars['Boolean'],
};

export type Query = {
   __typename?: 'Query',
  spotifyGetCurrentSongPlaying?: Maybe<CurrentSongPlayingResult>,
};




export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  CurrentSongPlayingResult: ResolverTypeWrapper<CurrentSongPlayingResult>,
  Album: ResolverTypeWrapper<Album>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Artist: ResolverTypeWrapper<Artist>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  CacheControlScope: CacheControlScope,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  CurrentSongPlayingResult: CurrentSongPlayingResult,
  Album: Album,
  String: Scalars['String'],
  Artist: Artist,
  Float: Scalars['Float'],
  Boolean: Scalars['Boolean'],
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
};

export type AlbumResolvers<ContextType = any, ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  releaseDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ArtistResolvers<ContextType = any, ParentType extends ResolversParentTypes['Artist'] = ResolversParentTypes['Artist']> = {
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CurrentSongPlayingResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentSongPlayingResult'] = ResolversParentTypes['CurrentSongPlayingResult']> = {
  album?: Resolver<ResolversTypes['Album'], ParentType, ContextType>,
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  previewUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  externalUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  trackLengthMilliseconds?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  currentProgress?: Resolver<ResolversTypes['Float'], ParentType, ContextType>,
  isCurrentlyPlaying?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  spotifyGetCurrentSongPlaying?: Resolver<Maybe<ResolversTypes['CurrentSongPlayingResult']>, ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type Resolvers<ContextType = any> = {
  Album?: AlbumResolvers<ContextType>,
  Artist?: ArtistResolvers<ContextType>,
  CurrentSongPlayingResult?: CurrentSongPlayingResultResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Upload?: GraphQLScalarType,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
