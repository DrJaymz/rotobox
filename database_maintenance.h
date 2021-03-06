#ifndef DATABASE_MAINTENANCE_H
#define DATABASE_MAINTENANCE_H

#include <stdbool.h>
#include <stdio.h>
#include <stdint.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

struct database_maintenance_t {
	const char* table_name;
	const char* verify_query;
	bool (*table_create_fn)(void);
};


bool database_maintenance(bool rebuild);

#endif  // DATABASE_MAINTENANCE_H