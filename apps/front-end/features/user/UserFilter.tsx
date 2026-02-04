import { useUserStore } from '@/stores/user/userStore';
import { Button, Dropdown, Label } from '@heroui/react';
import NextLink from 'next/link';

export default function UserFilter() {

    const {
        searchQuery,
        roleFilter,
        statusFilter,
        setSearchQuery,
        setRoleFilter,
        setStatusFilter,
        deleteUser,
        getFilteredUsers
    } = useUserStore();

    const filteredUsers = getFilteredUsers();
    return (
        <>
            <div className="flex gap-4 mb-6">
                {/* Search */}
                <div className="flex-1">
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-zinc-700"
                        />
                    </div>
                </div>

                {/* Role Filter */}
                <Dropdown>
                    <Button aria-label="Menu" variant="secondary">
                        {roleFilter}
                    </Button>
                    <Dropdown.Popover>
                        <Dropdown.Menu onAction={(key) => setRoleFilter(key as string)}>
                            <Dropdown.Item id="All Roles" textValue="All Roles">
                                <Label>All Roles</Label>
                            </Dropdown.Item>
                            <Dropdown.Item id="Administrator" textValue="Administrator">
                                <Label>Administrator</Label>
                            </Dropdown.Item>
                            <Dropdown.Item id="Field Supervisor" textValue="Field Supervisor">
                                <Label>Field Supervisor</Label>
                            </Dropdown.Item>
                            <Dropdown.Item id="Engineer" textValue="Engineer">
                                <Label>Engineer</Label>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>
                {/* Status Filter */}
                <Dropdown>
                    <Button aria-label="Menu" variant="secondary">
                        {statusFilter}
                    </Button>
                    <Dropdown.Popover>
                        <Dropdown.Menu onAction={(key) => setStatusFilter(key as string)}>
                            <Dropdown.Item id="All Status" textValue="All Status">
                                <Label>All Status</Label>
                            </Dropdown.Item>
                            <Dropdown.Item id="Active" textValue="Active">
                                <Label>Active</Label>
                            </Dropdown.Item>
                            <Dropdown.Item id="Inactive" textValue="Inactive">
                                <Label>Inactive</Label>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>

                {/* Create User Button */}
                <NextLink href="/user/new">
                    <Button
                        variant="danger"
                    >
                        Create User
                    </Button>
                </NextLink>
            </div>
        </>
    )
}