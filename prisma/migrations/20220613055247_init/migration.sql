-- CreateTable
CREATE TABLE "entry" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "location" STRING NOT NULL,
    "date" TIMESTAMP(6) NOT NULL,
    "variant" STRING NOT NULL,
    "num_sequences" INT8 NOT NULL,
    "perc_sequences" DECIMAL NOT NULL,
    "num_sequences_total" INT8 NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMPTZ(6),

    CONSTRAINT "PK_a58c675c4c129a8e0f63d3676d6" PRIMARY KEY ("id")
);
