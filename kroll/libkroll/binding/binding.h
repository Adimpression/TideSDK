/**
* This file has been modified from its orginal sources.
*
* Copyright (c) 2012 Software in the Public Interest Inc (SPI)
* Copyright (c) 2012 David Pratt
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*
***
* Copyright (c) 2008-2012 Appcelerator Inc.
* 
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

#ifndef _KR_BINDING_H_
#define _KR_BINDING_H_

#include "../kroll.h"

namespace kroll
{
    class Event;
    class EventListener;
    class KEventObject;
    class ProfiledGlobalObject;
}

#include "kobject.h"
#include "kmethod.h"
#include "klist.h"
#include "value.h"
#include "static_bound_list.h"
#include "static_bound_method.h"
#include "static_bound_object.h"
#include "k_function_ptr_method.h"
#include "arg_list.h"
#include "value_exception.h"
#include "callback.h"
#include "k_delegating_object.h"
#include "k_accessor.h"
#include "k_accessor_object.h"
#include "k_accessor_list.h"
#include "k_accessor_method.h"
#include "scope_method_delegate.h"
#include "bytes.h"
#include "void_ptr.h"
#include "event.h"
#include "read_event.h"
#include "k_event_object.h"
#include "k_event_method.h"
#include "profiled_bound_object.h"
#include "profiled_bound_list.h"
#include "profiled_bound_method.h"
#include "global_object.h"
#include "profiled_global_object.h"
#include "stream.h"

#endif