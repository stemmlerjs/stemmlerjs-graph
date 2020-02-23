import { Either } from "../../../../shared/core/either";
import { CurrentSongPlayingResult } from "../../../../shared/infra/graphql/generated/types";

export type GetCurrentSongPlayingResult = Either<
  null,
  CurrentSongPlayingResult
>;

