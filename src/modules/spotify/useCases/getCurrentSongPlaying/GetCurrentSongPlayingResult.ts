import { Either } from "../../../../shared/core/Either";
import { CurrentSongPlayingResult } from "../../../../shared/infra/graphql/generated/types";

export type GetCurrentSongPlayingResult = Either<
  null,
  CurrentSongPlayingResult
>;

